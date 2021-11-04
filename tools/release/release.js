import {exec} from 'child_process';
import {promisify} from 'util';
import yargs from 'yargs';
import chalk from 'chalk';
import inquirer from 'inquirer';
import log from '../_utility/log.js';
import AppRelease from './app-release/app-release.js';

// Command description
const cmd = yargs(process.argv.slice(2))
	.scriptName('release')
	.usage('$0 [--lang=(en|ru)] [--version|-v] [--help|-h]')
	.command(
		'$0 [options]',
		'Automates the project releasing process.',
		yargs => {}
	)
	.options({
		lang: {description: 'Set commit messages language', type: 'string', choices: ['en', 'ru'], default: 'en'},
	})
	.version('1.0.0')
	.alias('v', 'version')
	.help('help')
	.alias('h', 'help')
	.locale('en')
	.argv;

// Functionality
(async function() {
	log.ln();

	// Get release version
	const version = await AppRelease.getNextVersion().catch(({message}) => {
		log.error(message).ln();
		process.exit();
	});

	// Release project
	const release = new AppRelease({
		version,
		lang: cmd.lang,
	});

	await release.prepareRelease()
		.then(() => log.ln())
		.catch(({message}) => {
			log.block.error(message);
			process.exit();
		});

	// Confirm releasing
	const doPublish = await inquirer.prompt([{
		type: 'confirm',
		name: 'publish',
		message: 'Is everything OK?',
	}])
		.then(({publish}) => publish);

	if (!doPublish) {

		promisify(exec)('git checkout -- .')
			.then(() => {
				log.block.info('Publication canceled, all changes are undone');
			})
			.catch(({stderr}) => {
				log.ln().error(stderr);
				log.block.info('Publication canceled');
			});

	} else {

		log.ln();

		release.publishRelease()
			.then(() => log.block.success('Version %s successfully released', chalk.cyan(version)))
			.catch(({message}) => log.block.error(message));

	}

})();
