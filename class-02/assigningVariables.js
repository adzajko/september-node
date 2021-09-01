
/**
 * Variable declaration & initialization
 * Variables in JavaScript can be one of two types: let or const
 * Const should be used every time, unless a specific use case where the variable needs to be reassigned, in which case, use let
 * If a variable is left without an initial value, its value will be undefined e.g. const varName; (this will result in varName being undefined)
 * const variables CANNOT be reassigned.
 * Arrow functions (ES6) need to be assgined to a variable.
 * Remember that const and let are BLOCK-scoped. What this means is that they are unavailable outside the block where they are declared.
 * A block can be the execution block of a function, the insides of an if-statement, switch statement and loops.
 */
const variableName = 15;

/**
 * Classic Arrow function, no arguments, nothing in execution block
 * The return value of this function is undefined.
 */
const arrowFunction = () => {}

/**
 * Arrow function with two arguments being passed in, empty execution block.
 * @param {*} argumentOne 
 * @param {*} argumentTwo 
 */
const arrowFunctionWithArguments = (argumentOne, argumentTwo) => {}


/**
 * Assigning the value of an import to a variable.
 */
const http = require('http');