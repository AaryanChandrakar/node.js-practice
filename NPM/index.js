import chalk from 'chalk';
import validator from 'validator';

// console.log(chalk.blue.italic('Hello World'));

// console.log(chalk.red("My name is aaryan"));

// console.log(chalk.red.underline.inverse("My name is aaryan"));

// console.log(chalk.green.underline.inverse("My name is aaryan"));

const email = validator.isEmail(`aryanchandrakar100@gmail.com`);
console.log(email ? chalk.green.inverse(email) : chalk.red.inverse(email));