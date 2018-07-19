'use strict';

const logger = require('./lib/logger');
const reader = require('./lib/reader');

const limerickPath = `${__dirname}/data/limerick.txt`;
const mobyPath = `${__dirname}/data/moby.txt`;
const frankPath = `${__dirname}/data/frank.txt`;

const printCharacters = (characters) => {
  console.log(characters);
  console.log('------------------------------------------------------');
};
const CHARACTERS = 400;


// try {
//   reader.readNCharsAsync(mobyPath, CHARACTERS, (moby) => {
//     printCharacters(moby);
//   });
//   reader.readNCharsAsync(limerickPath, CHARACTERS, (limerick) => {
//     printCharacters(limerick);
//   });
//   reader.readNCharsAsync(frankPath, CHARACTERS, (frank) => {
//     printCharacters(frank);
//   });
// } catch (error) {
//   logger.log(logger.ERROR, error);
// }

try {
  reader.readNCharsAsync(mobyPath, CHARACTERS, (moby) => {
    printCharacters(moby);
    reader.readNCharsAsync(limerickPath, CHARACTERS, (limerick) => {
      printCharacters(limerick);
      reader.readNCharsAsync(frankPath, CHARACTERS, (frank) => {
        printCharacters(frank);
      });
    });
  });
} catch (error) {
  logger.log(logger.ERROR, error);
}
