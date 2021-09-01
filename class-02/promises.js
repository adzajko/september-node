const asyncOperation = async () => {
  // Creating a new Promise
  const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(15);
    }, 5000);
  });

  // Resolving a promise's value using .then()
  //    newPromise
  //     .then(result => {
  //         console.log(result)
  //     })

  // Resolving a promise's value using async / await
  try {
    const result = await newPromise;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  asyncOperation
};
