/**
 * We dont need to wrap this in a function, since we require an active connection only.
 * We can just resolve the connection result without exporting anything.
 */
const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Established DB Connection.');
  })
  .catch(err => {
    console.log(err);
  });
