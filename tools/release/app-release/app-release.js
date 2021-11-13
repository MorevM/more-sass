import {exec} from 'child_process';
import {promisify} from 'util';
import ora from 'ora';
import chalk from 'chalk';
import figures from 'figures';
import inquirer from 'inquirer';
import log from '@morev/more-log';
import PrepareTasks from './modules/prepare.js';
import PublishTasks from './modules/publish.js';

/**
 * Automates the release process.
 *
 * @mixes PrepareTasks
 * @mixes PublishTasks
 */
class AppRelease {

	/**
	 * Release version.
	 *
	 * @protected
	 *
	 * @type {string}
	 */
	_version = '';

	/**
	 * Commit messages language.
	 *
	 * @protected
	 *
	 * @type {string}
	 */
	_lang = '';

	/**
	 * Initializes class instance.
	 *
	 * @param    {object}    options              The input options.
	 * @param    {string}    options.version      Release version.
	 * @param    {string}    [options.lang=en]    Commit messages language.
	 *
	 * @return   {AppRelease}
	 */
	constructor(options) {

		this._version = options.version;
		this._lang = options.lang ?? 'en';

		return this;

	}

	/**
	 * Executes a given task.
	 *
	 * @protected
	 *
	 * @param    {string}                 title       Task title, outputs into console.
	 * @param    {function(): Promise}    taskExec    Task executor function.
	 *
	 * @return   {Promise<void|Error>}
	 */
	_runTask(title, taskExec) {

		const progress = ora({text: ` ${title}`, color: 'cyan'});
		progress.start();

		return new Promise((resolve, reject) => {

			taskExec()
				.then(() => {
					progress.stopAndPersist({symbol: `${chalk.green(figures.tick)}`});
					resolve();
				})
				.catch(err => {
					progress.stopAndPersist({symbol: `${chalk.red(figures.cross)}`});
					reject(err);
				});

		});

	}

	/**
	 * Executes a given tasks.
	 *
	 * @protected
	 *
	 * @param    {Array.<[title: string, method: string, fallback?: string]>}    tasksList    Task lists.
	 *
	 * @return   {Promise<void|Error>}
	 */
	_runTasks(tasksList) {

		return new Promise(async (resolve, reject) => {

			for (const [title, method, fallback] of tasksList) {

				const error = await this._runTask(title, method.bind(this))
					.then(() => false)
					.catch(err => err);

				if (error !== false) {

					if (!fallback) {
						return reject(error);
					}

					const fbError = await fallback.bind(this)(error, title)
						.then(() => false)
						.catch(err => err);

					if (fbError !== false) {
						return reject(fbError);
					}

				}

			}

			resolve();

		});

	}

	/**
	 * Executes tasks to prepare release.
	 *
	 * @return {Promise<void|Error>}
	 */
	prepareRelease() {

		return this._runTasks([
			['Lint styles', this.lintStyles],
			['Check uncommitted files', this.checkUncommitted],
			['Update package version', this.updateVersion],
			['Update changelog', this.updateChangelog],
		]);

	}

	/**
	 * Executes tasks to publish release.
	 *
	 * @return {Promise<void|Error>}
	 */
	publishRelease() {

		return this._runTasks([
			['Commit changes', this.commitChanges],
			['Set version tag', this.setTag],
			['Publish project', this.publishProject],
		]);

	}

	/**
	 * Retrieves version number to be used in the project release.
	 *
	 * @return   {Promise<string|Error>}    Promise object representing the version number.
	 */
	static getNextVersion() {

		return new Promise((resolve, reject) => {

			promisify(exec)('git tag --list')
				.then(({stdout}) => {

					const allTags = stdout.split('\n').map(n => n.trim()).filter(n => /^v(\d+\.){2}\d+$/.test(n));
					const lastTag = allTags.pop();

					return !!lastTag ? lastTag.slice(1) : null;

				})
				.then(version => {

					if (!version) {
						return resolve('1.0.0');
					}

					const [currentMajor, currentMinor, currentPatch] = version.split('.').map(Number);

					const nextMajor = [currentMajor + 1, 0, 0].join('.');
					const nextMinor = [currentMajor, currentMinor + 1, 0].join('.');
					const nextPatch = [currentMajor, currentMinor, currentPatch + 1].join('.');

					inquirer.prompt([{
						type: 'list',
						name: 'version',
						message: 'Choose release type:',
						choices: [
							{name: `MAJOR: ${nextMajor}`, value: nextMajor},
							{name: `MINOR: ${nextMinor}`, value: nextMinor},
							{name: `PATCH: ${nextPatch}`, value: nextPatch},
						],
					}])
						.then(({version}) => resolve(version))
						.finally(() => log.ln());

				})
				.catch(({stderr}) => {
					reject(new Error(stderr));
				});

		});

	}

}

Object.assign(AppRelease.prototype, PrepareTasks);
Object.assign(AppRelease.prototype, PublishTasks);

export default AppRelease;
