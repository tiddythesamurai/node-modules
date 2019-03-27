# [Command Line Utilities](https://www.npmjs.com/package/cli-game-utils)

## Overview
***
`cli-game-utils` is a node module providing functions for games with a command line interface or purely command line games. While the module is intended to be used for games, it can be used for other projects involving text output as well.
## Functions
***
#### 1. `sPrint(input, [delay, endNewLine])`
sPrint will sequentially print the string inputted with a timed (default is 100 milliseconds) delay between each character. `delay` specifies the delay between each character. `endNewLine` is a boolean which will determine whether a newline is appended to the string.
#### 2. `sleep(milliseconds)`
sleep will add a delay to the program for a specified amount of time in milliseconds.

## Classes
***
#### Printer
The `Printer` class currently has 1 function and 1 constructor.
Note: In the source code, there is an instance of the class called `printer` with `defaultCharDelay` set to 100.
##### Constructor:
 The constructor takes a value, `defaultCharDelay` which is used when the user does not specify a delay.
##### Functions:
###### `writeQuestion(query, [charDelay])`
writeQuestion will output the specified query (using `sPrint`) and pause until the user gives an input via the command line. If `charDelay` is not specified the `defaultCharDelay` will be used.
## Examples
```js
const util = require("cli-game-utils");
util.sPrint("Hello World!", 200, true);
```
Output:
![](https://i.ibb.co/6tXq0Ls/ezgif-com-crop.gif)
```js
const util = require("cli-game-utils");
console.log("This is printed immediately.");
util.sleep(3000);
console.log("This is executed three seconds later.");
```
Output:
![](https://i.ibb.co/hmHpBWx/ezgif-com-crop-1.gif)
