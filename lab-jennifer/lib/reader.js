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
  const index = 0;
  const results = [];
  console.log(`Reading ${pathsArray[index]}`);
  logger.log(logger.VERBOSE, `Reading ${pathsArray[index]}`);

  fs.readFile(pathsArray[index], (error, fileBuffer) => {
    if (error) {
      throw error;
    }
    results.push(fileBuffer.toString('utf8', 0, characters));
    return callback(results);
  });
};
