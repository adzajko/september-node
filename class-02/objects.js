
/**
 * Objects are the bread and butter of Javascript. Everything either is an object, or behaves like one.
 * Thus making interaction with objects imperative to JavaScript.
 * Below is an example of literal object creation.
 */
const objectOne = {}


/**
 * Objects have properties. Each property needs to have its own unique name as well as value. 
 * The values of these properties can be string, number, boolean, or even functions
 */
const objectWithProperties = {
    propertyOne: 12,
    propertyTwo: false,
    propertyThree: 'random text',
    propertyFour: () => {
        console.log('Something')
    }
}

/**
 * Accessing properties of an object is done by using a dot (.)
 * So, the name of the object, followed by a dot and then the name of the property we wish to access.
 */
objectWithProperties.propertyFour()
objectWithProperties.propertyOne