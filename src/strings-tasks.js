/**
 * Returns the length of the given string.
 *
 * @param {string} value - The input string to calculate the length of.
 * @return {number} - The length of the string.
 *
 * @example
 *   getStringLength('aaaaa') => 5
 *   getStringLength('b') => 1
 *   getStringLength('') => 0
 *   getStringLength() => 0
 *   getStringLength(null) => 0
 *   getStringLength(undefined) => 0
 */
function getStringLength(value) {
  if (typeof value === 'string') {
    return value.length;
  }
  return 0;
}

/**
 * Returns true if the value is a string, otherwise returns false.
 *
 * @param {string} value - The value to check if it's a string.
 * @return {boolean} - True if the value is a string, false otherwise.
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */
function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} value1 - The first string to concatenate.
 * @param {string} value2 - The second string to concatenate.
 * @return {string} - The concatenated string.
 *
 * @example
 *   concatenateStrings('aa', 'bb') => 'aabb'
 *   concatenateStrings('aa', '') => 'aa'.
 *   concatenateStrings('', 'bb') => 'bb'
 */
function concatenateStrings(value1, value2) {
  return value1 + value2;
}

/**
 * Returns the first character of the given string.
 *
 * @param {string} value - The input string to extract the first character from.
 * @return {string} - The first character of the string.
 *
 * @example
 *   getFirstChar('John Doe') => 'J'
 *   getFirstChar('cat') => 'c'
 *   getFirstChar('') => ''
 */
function getFirstChar(value) {
  return value.charAt(0);
}

/**
 * Removes leading and trailing whitespace characters from the string.
 *
 * @param {string} value - The input string to remove leading and trailing whitespaces from.
 * @return {string} - The string with leading and trailing whitespaces removed.
 *
 * @example
 *   removeLeadingAndTrailingWhitespaces('  Abracadabra') => 'Abracadabra'
 *   removeLeadingAndTrailingWhitespaces('cat ') => 'cat'
 *   removeLeadingAndTrailingWhitespaces('\t\t\tHello, World! ') => 'Hello, World!'
 */
function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}

/**
 * Removes only leading whitespace characters from the string.
 *
 * @param {string} value - The input string to remove leading whitespaces from.
 * @return {string} - The string with leading whitespaces removed.
 *
 * @example
 *   removeLeadingWhitespaces('  Abracadabra') => 'Abracadabra'
 *   removeLeadingWhitespaces('cat ') => 'cat '
 *   removeLeadingWhitespaces('\t\t\tHello, World! ') => 'Hello, World! '
 */
function removeLeadingWhitespaces(value) {
  return value.replace(/^\s+/, '');
}

/**
 * Removes only trailing whitespace characters from the string.
 *
 * @param {string} value - The input string to remove trailing whitespaces from.
 * @return {string} - The string with trailing whitespaces removed.
 *
 * @example
 *   removeTrailingWhitespaces('  Abracadabra') => '  Abracadabra'
 *   removeTrailingWhitespaces('cat ') => 'cat'
 *   removeTrailingWhitespaces('\t\t\tHello, World! ') => '\t\t\tHello, World!'
 */
function removeTrailingWhitespaces(value) {
  return value.replace(/\s+$/, '');
}
/**
 * Returns a string that is repeated the specified number of times.
 *
 * @param {string} str - The string to repeat.
 * @param {number} times - The number of times to repeat the string.
 * @return {string} - The result string.
 *
 * @example
 *   repeatString('A', 5) => 'AAAAA'
 *   repeatString('cat', 3) => 'catcatcat'
 *   repeatString('', 3) => ''
 *   repeatString('abc', -2) => ''
 */
function repeatString(str, times) {
  if (times <= 0) return '';
  return str.repeat(times);
}

/**
 * Remove the first occurrence of a substring from a string.
 *
 * @param {string} str - The input string.
 * @param {string} value - The substring to remove from the string.
 * @return {string} - The string with the first occurrence of the substring removed.
 *
 * @example
 *   removeFirstOccurrences('To be or not to be', 'be') => 'To  or not to be'.
 *   removeFirstOccurrences('I like legends', 'end') => 'I like legs'.
 *   removeFirstOccurrences('ABABAB', 'BA') => 'ABAB'.
 */
function removeFirstOccurrences(str, value) {
  return str.replace(value, '');
}

/**
 * Remove the last occurrence of a substring from a string.
 *
 * @param {string} str - The input string.
 * @param {string} value - The substring to remove from the string.
 * @return {string} - The string with the last occurrence of the substring removed.
 *
 * @example
 *   removeLastOccurrences('To be or not to be', 'be') => 'To be or not to '.
 *   removeLastOccurrences('I like legends', 'end') => 'I like legs'.
 *   removeLastOccurrences('ABABAB', 'BA') => 'ABAB'.
 */
function removeLastOccurrences(str, value) {
  const index = str.lastIndexOf(value);
  if (index === -1) return str;
  return str.slice(0, index) + str.slice(index + value.length);
}

/**
 * Calculate the sum of character codes of the given string.
 *
 * @param {string} str - The input string.
 * @return {number} - The sum of character codes of the string.
 *
 * @example
 *   sumOfCodes('My String') => 861 (77 + 121 + 32 + 83 + 116 + 114 + 105 + 110 + 103 = 861)
 *   sumOfCodes('12345') => 255 (49 + 50 + 51 + 52 + 53 = 255)
 *   sumOfCodes('') => 0
 *   sumOfCodes() => 0
 */
function sumOfCodes(str) {
  if (!str) return 0;
  return Array.from(str).reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

/**
 * Checks if a string starts with a specific substring.
 *
 * @param {string} str - The input string.
 * @param {string} substr - The substring to check.
 * @return {boolean} - Returns true if str starts with substr, false otherwise.
 *
 * @example:
 *   startsWith('Hello World', 'World') => false
 *   startsWith('Hello World', 'Hello') => true
 */
function startsWith(str, substr) {
  return str.startsWith(substr);
}

/**
 * Checks if a string ends with a specific substring.
 *
 * @param {string} str - The input string.
 * @param {string} substr - The substring to check.
 * @return {boolean} - Returns true if str starts with substr, false otherwise.
 *
 * @example:
 *   endsWith('Hello World', 'World') => true
 *   endsWith('Hello World', 'Hello') => false
 */
function endsWith(str, substr) {
  return str.endsWith(substr);
}
/**
 * Returns a time string in the "mm:ss" format.
 */
function formatTime(minutes, seconds) {
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
    2,
    '0'
  )}`;
}

/**
 * Returns a string in reverse order.
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}

/**
 * Returns a string with characters in alphabetical order.
 */
function orderAlphabetically(str) {
  return str.split('').sort().join('');
}

/**
 * Checks if a given string contains a specified substring.
 */
function containsSubstring(str, substring) {
  return str.includes(substring);
}

/**
 * Returns the number of vowels in the string.
 */
function countVowels(str) {
  const vowels = 'aeiouyAEIOUY';
  return str.split('').filter((char) => vowels.includes(char)).length;
}

/**
 * Returns true if the string is a palindrome; otherwise false.
 */
function isPalindrome(str) {
  const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return normalizedStr === reverseString(normalizedStr);
}

/**
 * Find the longest word in the sentence.
 */
function findLongestWord(sentence) {
  return sentence
    .split(' ')
    .reduce(
      (longest, word) => (word.length > longest.length ? word : longest),
      ''
    );
}

/**
 * Returns the string where each word is reversed.
 */
function reverseWords(str) {
  return str
    .split(' ')
    .map((word) => reverseString(word))
    .join(' ');
}

/**
 * Inverts the case of each character in the given string.
 */
function invertCase(str) {
  return str
    .split('')
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join('');
}

/**
 * Returns the result of string template and given parameters firstName and lastName.
 */
function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 */
function extractNameFromTemplate(value) {
  return value.match(/Hello, (.+?)!/)[1];
}

/**
 * Remove the first and last angle brackets from tag string
 *
 * @param {string} str - The input tag.
 * @return {string} - The tag without the first and last angle brackets.
 *
 * @example
 *   unbracketTag('<div>') => 'div'
 *   unbracketTag('<span>') => 'span'
 *   unbracketTag('<a>') => 'a'
 */
function unbracketTag(str) {
  // Видаляємо перший і останній символ за допомогою slice
  return str.slice(1, -1);
}

/**
 * Extracts e-mails from single string with e-mails list delimited by semicolons
 *
 * @param {string} str - The input string.
 * @return {array} - The list of e-mails extracted from the string.
 *
 * @example
 *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'
 *   => [
 *      'angus.young@gmail.com',
 *      'brian.johnson@hotmail.com',
 *      'bon.scott@yahoo.com'
 *   ],
 *   'info@gmail.com' => ['info@gmail.com']
 */
function extractEmails(str) {
  // Розбиваємо рядок на масив за допомогою роздільника ";"
  return str.split(';');
}

/**
 * Encode specified string with ROT13 cipher
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} str - The input string.
 * @return {string} - The ROT13 encoded string.
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
 *    => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
function encodeToRot13(str) {
  return str.replace(/[A-Za-z]/g, (char) => {
    const base = char <= 'Z' ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
    return String.fromCharCode(((char.charCodeAt(0) - base + 13) % 26) + base);
  });
}

/**
 * Returns playing card id.
 *
 * Playing cards initial deck includes the cards in the following order:
 *
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 *
 * Function returns the zero-based index of specified card in the initial deck above.
 *
 * @param {string} value - The card value.
 * @return {number} - The zero-based index.
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
function getCardId(value) {
  const suits = ['♣', '♦', '♥', '♠']; // Масті
  const ranks = [
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
  ]; // Ранги
  const rank = value.slice(0, -1); // Отримуємо ранг (усе, окрім останнього символу)
  const suit = value.slice(-1); // Отримуємо масть (останній символ)
  return ranks.indexOf(rank) + suits.indexOf(suit) * ranks.length;
}

module.exports = {
  getStringLength,
  isString,
  concatenateStrings,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  removeLeadingWhitespaces,
  removeTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  removeLastOccurrences,
  sumOfCodes,
  endsWith,
  startsWith,
  formatTime,
  reverseString,
  countVowels,
  orderAlphabetically,
  containsSubstring,
  isPalindrome,
  findLongestWord,
  reverseWords,
  invertCase,
  getStringFromTemplate,
  extractNameFromTemplate,
  extractEmails,
  unbracketTag,
  encodeToRot13,
  getCardId,
};
