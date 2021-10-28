import {exec} from 'child_process';
import {promisify} from 'util';

/**
 * Prepare release.
 * 
 * @mixin
 */
export default {
	
	/**
	 * Runs styles linting process.
	 * 
	 * @return {Promise<void|Error>}
	 */
	lintStyles() {
		
		return new Promise((resolve, reject) => {
			promisify(exec)('yarn lint:fix')
				.then(resolve)
				.catch(({stdout}) => reject(new Error(stdout)));
		});
		
	},
	
	/**
	 * Checks whether uncommitted files are present.
	 * 
	 * @return {Promise<void|Error>}
	 */
	checkUncommitted() {
		
		return new Promise((resolve, reject) => {
			promisify(exec)('git status --porcelain')
				.then(({stdout}) => stdout === '' ? resolve() : reject(new Error('Has uncommitted files')))
				.catch(({stderr}) => reject(new Error(stderr)));
		});
		
	},
	
	/**
	 * Updates package version.
	 * 
	 * @return {Promise<void|Error>}
	 */
	updateVersion() {
		
		return new Promise((resolve, reject) => {
			promisify(exec)(`yarn version --new-version ${this._version} --no-commit-hooks --no-git-tag-version`)
				.then(resolve)
				.catch(({stderr}) => reject(new Error(stderr)));
		});
		
	},
	
	/**
	 * Updates CHANGELOG.md file.
	 * 
	 * @return {Promise<void|Error>}
	 */
	updateChangelog() {
		
		return new Promise((resolve, reject) => {
			promisify(exec)('yarn conventional-changelog -p angular -i CHANGELOG.md -s')
				.then(resolve)
				.catch(({stderr}) => reject(new Error(stderr)));
		});
		
	},
	
};
