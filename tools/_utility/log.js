import chalk from 'chalk';
import figures from 'figures';

/**
 * Helper functions for outputs styled console messages.
 */
const log = {
	
	/**
	 * Outputs an empty line(s) to the console.
	 * 
	 * @param    {number}    [num=1]    Number of empty lines.
	 */
	ln(num = 1) {
		
		for (let i = 0; i < num; i++) {
			console.log('');
		}
		
		return log;
		
	},
	
	/**
	 * Outputs a simple message to the console.
	 * 
	 * @param    {*}       message     A JavaScript string containing zero or more substitution strings.
	 * @param    {...*}    [substr]    JavaScript objects with which to replace substitution strings within message.
	 */
	message(message, ...substr) {
		console.log(`${figures.pointer}  ${message}`, ...substr);
		return log;
	},
	
	/**
	 * Outputs an info message to the console.
	 * 
	 * @param    {*}       message     A JavaScript string containing zero or more substitution strings.
	 * @param    {...*}    [substr]    JavaScript objects with which to replace substitution strings within message.
	 */
	info(message, ...substr) {
		console.log(`${chalk.blue('i')}  ${message}`, ...substr);
		return log;
	},
	
	/**
	 * Outputs a success message to the console.
	 * 
	 * @param    {*}       message     A JavaScript string containing zero or more substitution strings.
	 * @param    {...*}    [substr]    JavaScript objects with which to replace substitution strings within message.
	 */
	success(message, ...substr) {
		console.log(`${chalk.green(figures.tick)}  ${message}`, ...substr);
		return log;
	},
	
	/**
	 * Outputs a warning message to the console.
	 * 
	 * @param    {*}       message     A JavaScript string containing zero or more substitution strings.
	 * @param    {...*}    [substr]    JavaScript objects with which to replace substitution strings within message.
	 */
	warn(message, ...substr) {
		console.log(`${chalk.yellow(figures.warning)}  ${message}`, ...substr);
		return log;
	},
	
	/**
	 * Outputs an error message to the console.
	 * 
	 * @param    {*}       message     A JavaScript string containing zero or more substitution strings.
	 * @param    {...*}    [substr]    JavaScript objects with which to replace substitution strings within message.
	 */
	error(message, ...substr) {
		console.log(`${chalk.red(figures.cross)}  ${message}`, ...substr);
		return log;
	},
	
	block: {
		
		/**
		 * Outputs a simple message to the console.
		 * 
		 * @param    {*}       message     A JavaScript string containing zero or more substitution strings.
		 * @param    {...*}    [substr]    JavaScript objects with which to replace substitution strings within message.
		 */
		message(message, ...substr) {
			console.log(`\r\n${chalk.inverse(' MESSAGE: ')} ${message}\r\n`, ...substr);
			return log;
		},
		
		/**
		 * Outputs an info message to the console.
		 * 
		 * @param    {*}       message     A JavaScript string containing zero or more substitution strings.
		 * @param    {...*}    [substr]    JavaScript objects with which to replace substitution strings within message.
		 */
		info(message, ...substr) {
			console.log(`\r\n${chalk.bgBlue.black(' INFO: ')} ${message}\r\n`, ...substr);
			return log;
		},
		
		/**
		 * Outputs a success message to the console.
		 * 
		 * @param    {*}       message     A JavaScript string containing zero or more substitution strings.
		 * @param    {...*}    [substr]    JavaScript objects with which to replace substitution strings within message.
		 */
		success(message, ...substr) {
			console.log(`\r\n${chalk.bgGreen.black(' SUCCESS: ')} ${message}\r\n`, ...substr);
			return log;
		},
		
		/**
		 * Outputs a warning message to the console.
		 * 
		 * @param    {*}       message     A JavaScript string containing zero or more substitution strings.
		 * @param    {...*}    [substr]    JavaScript objects with which to replace substitution strings within message.
		 */
		warn(message, ...substr) {
			console.log(`\r\n${chalk.bgYellow.black(' WARNING: ')} ${message}\r\n`, ...substr);
			return log;
		},
		
		/**
		 * Outputs an error message to the console.
		 * 
		 * @param    {*}       message     A JavaScript string containing zero or more substitution strings.
		 * @param    {...*}    [substr]    JavaScript objects with which to replace substitution strings within message.
		 */
		error(message, ...substr) {
			console.log(`\r\n${chalk.bgRed.black(' ERROR: ')} ${message}\r\n`, ...substr);
			return log;
		},
		
	},
	
};

export default log;
