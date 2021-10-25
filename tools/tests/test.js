import glob from 'glob';
import sassTrue from 'sass-true';
import {SRC_PATH} from '~utility/paths.js';

glob.sync(`${SRC_PATH}/**/*.test.scss`).forEach(file => {
	sassTrue.runSass({file}, {describe, it});
});
