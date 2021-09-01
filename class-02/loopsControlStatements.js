const condition = true;

/**
 * The simplest control statement is an if-statement.
 * The 'else' part is optional, the 'if' part is not.
 */
if (condition === true) {
    console.log('What to do if condition is evaluated successfully')
} else {
    console.log('What to do if condition is evaluated as a non-success')
}

/**
 * Switch statement is a "more-evolved" if-statement, allowing branching and better overview of different use cases.
 * Remember to always break your statements, and include a default one
 */

switch (condition) {
    case true: {
        console.log('Do something.');
        break;
    }

    case false: {
        console.log('Do something else.');
        break;
    }

    default: {
        console.log('Do something if nothing else matches');
        break;
    }
}

let counter = 0;

/**
 * The simplest loop, a while loop, does something everytime the condition isn't met.
 * Remember to always have an exit clause in the while loop! Otherwise an infinite loop is created and you may need to buy a new PC.
 */
while(counter < 10) {
    console.log('Do something');
    counter++;
}


/**
 * Basically a while loop with more control for each iteration, the for loop is made up of three parts: 
 * declaration for counter variable, exit clause, and what happens with the counter variable after each iteration.
 */
for (let i = 0; i < 15; i++) {}


/**
 * A more refined version of a for loop, which can be used to do something specific with every member of an array.
 */
for (const iteratedMember of []) {

}