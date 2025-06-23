/* eslint-disable jest/require-hook */
import glob from 'glob';
import sassTrue from 'sass-true';

glob.sync('./**/*.test.scss').forEach((file) => {
	sassTrue.runSass({ file }, { describe, it });
});
