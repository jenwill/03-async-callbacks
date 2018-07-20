'use strict';

const fs = require('fs');
const logger = require('./logger');

const reader = module.exports = {};

// reader.readNCharsAsync = (filePath, characters, callback) => {
//   logger.log(logger.VERBOSE, `Reading ${filePath}`);
//
//   fs.readFile(filePath, (error, fileBuffer) => {
//     if (error) {
//       throw error;
//     }
//     return callback(fileBuffer.toString('utf8', 0, characters));
//   });
// };

reader.readNCharsAsync = (pathsArray, characters, callback) => {
  const results = [];
  fs.readFile(pathsArray[0], (error, fileBuffer) => {
    if (error) {
      throw error;
    }
    results.push(fileBuffer.toString('utf8', 0, characters));
    fs.readFile(pathsArray[1], (err1, fileBuffer1) => {
      if (err1) {
        throw err1;
      }
      results.push(fileBuffer1.toString('utf8', 0, characters));
      fs.readFile(pathsArray[2], (err2, fileBuffer2) => {
        if (err2) {
          throw err2;
        }
        results.push(fileBuffer2.toString('utf8', 0, characters));
        return callback(results);
      });
    });
  });
};
