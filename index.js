var chalk = require("chalk");
var log  = console.log()

// var message = "Hello " + chalk.blue("World");
// console.log(message);

console.log((chalk.blue('Hello') + ' World' + chalk.red('!')));

test = ["Hello", "My", "Baby", "Hello", "My", "Honey"]
console.log(chalk.red(test) )

var error = chalk.red.bold;
console.log(error("ERROR!!!!"))

console.log(chalk.dim("WHAT does THIS do???"))
console.log(chalk.inverse("HOW ABOUT this??"))
console.log(chalk.hidden("I'm hiding mad secrets from you son..... you smell."))
console.log(chalk.redBright("Hi ") + chalk.greenBright("how are ") + chalk.magentaBright("you?"))
console.log(chalk.bgBlue("Blue background ") + chalk.bgYellowBright("and YellowBright background"))

console.log(chalk.bold("does this work?"))

console.log(chalk`I'm attempting to bold just this num {bold 5280} and just red this: {red feet}`)

console.log(chalk.bold.rgb(10, 100, 200)('Hello!'));

