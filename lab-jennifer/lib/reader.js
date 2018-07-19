'use strict';

const fs = require('fs');
const logger = require('./logger');

const reader = module.exports = {};

reader.readNCharsAsync = (filePath, characters, callback) => {
  logger.log(logger.VERBOSE, `Reading ${filePath}`);

  fs.readFile(filePath, (error, fileBuffer) => {
    if (error) {
      throw error;
    }
    return callback(fileBuffer.toString('utf8', 0, characters));
  });
};
