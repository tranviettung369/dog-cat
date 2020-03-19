const chalk = require('chalk');

function Dog(name) {
	this.name = name;
}

Dog.prototype.sayHi = function() {
	console.log(chalk.blue(this.name));
};

module.exports = Dog;