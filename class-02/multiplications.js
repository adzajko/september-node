const multiplyTwo = (numberOne, numberTwo) => numberOne * numberTwo;

const multiplyThree = (numberOne, numberTwo, numberThree) => numberOne * numberTwo * numberThree;

/**
 * Multiple exports may be made from a single file, or none.
 * Each export should be in its own line, separated by a comma.
 */
module.exports = {
    multiplyTwo,
    multiplyThree
}