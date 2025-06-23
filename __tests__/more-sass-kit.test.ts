/* eslint-disable vitest/require-hook -- `sass-true` requirement:
   https://github.com/oddbird/true?tab=readme-ov-file#using-mocha-jest-or-other-js-test-runners
 */

import glob from 'glob';
import sassTrue from 'sass-true';

glob.sync('./**/*.test.scss').forEach((file) => {
	sassTrue.runSass({ file }, { describe, it });
});
