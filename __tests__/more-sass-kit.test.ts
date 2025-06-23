/* eslint-disable vitest/require-hook -- `sass-true` requirement:
   https://github.com/oddbird/true?tab=readme-ov-file#using-mocha-jest-or-other-js-test-runners
 */

import { globSync } from 'glob';
import sassTrue from 'sass-true';

globSync('./**/*.test.scss').forEach((file) => {
	sassTrue.runSass({ describe, it }, file);
});
