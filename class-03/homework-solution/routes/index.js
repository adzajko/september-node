const router = require('express').Router();
const path = require('path');

const { writeToFile } = require('../file-manipulator');
const pathToFile = path.join(__dirname, 'requestBody.txt');

router.get('/songs', (req, res, next) => {
  const queryParams = req.query;
  if (Object.keys(queryParams).length > 0) {
    res.status(200).json(queryParams);
  } else {
    res.status(400).json('Missing query params!');
  }
});

router.post('/detectives', (req, res, next) => {
  const reqBody = JSON.stringify(req.body);
  writeToFile(reqBody, pathToFile)
    .then(() => {
      res.status(201).json('File written.');
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
