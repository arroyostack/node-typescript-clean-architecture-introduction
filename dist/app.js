"use strict";
// Flag examples
// --base 10 -l=100 --file=hola.txt -s
const [tsnode, app, ...args] = process.argv;
console.log(args);
