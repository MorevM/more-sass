import {exec} from 'child_process';
import {promisify} from 'util';
import l10n from '../l10n/l10n.js';

/**
 * Prepare release.
 * 
 * @mixin
 */
export default {
	
	/**
	 * Commits changes in package.json and CHANGELOG.md.
	 * 
	 * @return {Promise<void|Error>}
	 */
	commitChanges() {
		
		const message = l10n[this._lang].commit.replace('%s', this._version);
		
		return new Promise((resolve, reject) => {
			promisify(exec)(`git add . && git commit -m "${message}"`)
				.then(resolve)
				.catch(({stderr}) => reject(new Error(stderr)));
		});
		
	},
	
	/**
	 * Sets up annotated version tag.
	 * 
	 * @return {Promise<void|Error>}
	 */
	setTag() {
		
		const message = l10n[this._lang].tag.replace('%s', this._version);
		
		return new Promise((resolve, reject) => {
			promisify(exec)(`git tag -a v${this._version} -m "${message}"`)
				.then(resolve)
				.catch(({stderr}) => reject(new Error(stderr)));
		});
		
	},
	
	/**
	 * Publishes project in the remote repository.
	 * 
	 * @return {Promise<void|Error>}
	 */
	publishProject() {
		
		return new Promise((resolve, reject) => {
			promisify(exec)('git push && git push --tags')
				.then(resolve)
				.catch(({stderr}) => reject(new Error(stderr)));
		});
		
	},
	
};
