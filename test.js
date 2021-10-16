/**
 * @jest-environment node
 */

import path from 'path';
import sassTrue from 'sass-true';
import glob from 'glob';

// const sassFiles = glob.sync(path.join(__dirname, './src/functions/**/*.test.scss'));
const sassFiles = glob.sync(path.join(__dirname, './src/**/*.test.scss'));

sassFiles.forEach(file => sassTrue.runSass({ file }, { describe, it }));
