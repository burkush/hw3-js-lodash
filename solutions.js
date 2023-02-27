// const _ = require('lodash');

// ========== Задача 1 lodash ==========

/*
const maxMinDiff = (arr) => {
  if (arr.length <= 1) return 0;

  return _.max(arr) - _.min(arr);
};

console.log(maxMinDiff([1, 2, 3, -4]));
console.log(maxMinDiff([16]));
*/

// ========== Задача 2 lodash ==========

/*
const getWords = (string, num) => {
  return _.words(string).filter((word) => _.size(word) > num);
};

console.log(
  getWords('There is no such thing as a moral or an immoral book', 4)
);
*/

// ========== Задача 3 lodash ==========

/*
const checkSameEnding = (str1, str2) => {
  return _.endsWith(str1, str2);
};

console.log(checkSameEnding('abc', 'bc'));
*/

// ========== Задача 4 lodash ==========

/*
const averagePairs = (arr) => {
  const averages = arr.map((el, i, elems) => _.mean([el, elems[i + 1]]));
  averages.pop();

  return averages;
};

console.log(averagePairs([1, 3, 5, 1, -10]));
*/

// ========== Задача 5 ==========

/*
const countVowels = (str) => {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'y']);
  let count = 0;

  for (let letter of str.toLowerCase()) {
    if (vowels.has(letter)) count++;
  }

  return count;
};

console.log(countVowels('Celebration'));

const removeABC = (str) => {
  let result = str.replace(/(a|b|c)/gi, '');

  return result === str ? null : result;
};

console.log(removeABC('This might be a bit hard'));
*/

// ========== Задача 6 lodash ==========

/*
const uniqueElems = (arr1, arr2) => {
  const singleArr = [...arr1, ...arr2];

  return _.uniq(singleArr);
};

console.log(uniqueElems([1, 2, 3, 4], [100, 2, 4, 1, 10]));
*/

// ========== Задача 7 ==========

/*
const swapKeysAndValues = (obj) => {
  const mutatedObj = {};

  for (let [key, value] of Object.entries(obj)) {
    mutatedObj[value] = key;
  }

  return mutatedObj;
};

console.log(
  swapKeysAndValues({ red: '#FF0000', green: '#00FF00', white: '#FFFFFF' })
);
*/

// ========== Задача 8 ==========

/*
const calcDiff = (stuff, insurance) => {
  return Object.values(stuff).reduce((a, b) => a + b, 0) - insurance;
};

console.log(calcDiff({ skate: 10, painting: 20 }, 19));
*/

// ========== Задача 9 DOM ==========

/*
const btn = document.getElementById('determine-btn');
btn.addEventListener('click', checkFits);

function brickFits(a, b, c, w, h) {
  if (a < 0 || b < 0 || c < 0 || w < 0 || h < 0) {
    return false;
  }

  const sorted = [a, b, c].sort((x, y) => x - y);

  return sorted[0] <= w && sorted[1] <= h;
}

function checkFits() {
  const height = document.getElementById('height').value;
  const width = document.getElementById('width').value;
  const depth = document.getElementById('depth').value;
  const holeWidth = document.getElementById('hole-width').value;
  const holeHeight = document.getElementById('hole-height').value;

  const fieldsFilled = validateFields(
    height,
    width,
    depth,
    holeHeight,
    holeWidth
  );

  if (fieldsFilled) {
    const canFit = brickFits(
      Number(height),
      Number(width),
      Number(depth),
      Number(holeWidth),
      Number(holeHeight)
    );

    alert(`Цегла поміщається: ${canFit}`);
  } else {
    alert('Заповніть всі поля форми');
  }
}

function validateFields(height, width, depth, holeHeight, holeWidth) {
  if (
    height === '' ||
    width === '' ||
    depth === '' ||
    holeWidth === '' ||
    holeHeight === ''
  ) {
    return false;
  }

  return true;
}
*/

// ========== Задача 10 ==========

/*
const getFileName = (filePath) => {
  const fileNameWithExtension =
    filePath.substring(filePath.lastIndexOf('/') + 1, filePath.length) ||
    filePath.substring(filePath.lastIndexOf('\\') + 1, filePath.length);

  const fileName = fileNameWithExtension.replace(/\.[^/.]+$/, '');

  return fileName;
};

console.log(getFileName('D:/Files/Home/myfile.txt'));
*/

// ========== Задача 11 lodash ==========

/*
const isCircularShift = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const concatenatedString = str2 + str2;

  return _.includes(concatenatedString, str1);
};

console.log(isCircularShift('abcd', 'dabc'));
*/

// ========== Задача 12 lodash ==========

/*
const getClosestElements = (arr) => {
  const sortedA = _.sortBy(arr);

  const b = [];
  const c = [];

  for (let i = 0; i < sortedA.length / 2; i++) {
    const closestElements = _.sortBy(
      [sortedA[2 * i], sortedA[2 * i + 1]],
      (num) => Math.abs(num - sortedA[2 * i + 1])
    );

    b.push(closestElements[0]);
    c.push(closestElements[1]);
  }

  return { b, c };
};

console.log(getClosestElements([16, 5, 1, 10, 3, 11, 2, 10]));
*/

// ========== Задача 13 ==========

/*
const modifyString = (str) => {
  const linkRegex = /(\b(?:https?|ftp):\/\/\S+)/gi;
  str = str.replace(linkRegex, '[посилання заборонено]');

  const emailRegex = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;
  str = str.replace(emailRegex, '[контакти заборонені]');

  let words = str.split(' ');

  words = words.map((word, index) => {
    if (index === 0) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    return word.toLowerCase();
  });

  words = _.filter(words, (word) => {
    const numRegex = /^[0-9]+$/;
    return !(word.length > 3 && numRegex.test(word));
  });

  const modifiedStr = words.join(' ');

  return modifiedStr;
};

console.log(
  modifyString(
    "Hello! I'm a student at https://university.ua ! Here's my email: emmaail@gmail.com. And now I will modify this string"
  )
);
*/

// ========== Задача 14 ==========

/*
const checkParentheses = (str) => {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
};

console.log(checkParentheses('((()))'));
*/

// ========== Задача 15 ==========

/*
const phrase = prompt('Введіть фразу:');

const words = phrase.split(' ');

const aCount = phrase.split('a').length - 1;

const listItems = words.map((word, index) => {
  if (index === 0) {
    word = word.toUpperCase();
  }

  if (index === words.length - 2 || index === words.length - 1) {
    word = word.toLowerCase();
  }

  return `<li>${word}</li>`;
});

const ul = document.createElement('ul');
ul.innerHTML = listItems.join('');

document.body.appendChild(ul);

alert(`Буква "a" зустрічається ${aCount} разів`);

// Таймер неактивності

let inactivityTimer = setTimeout(() => {
  const response = confirm('Ви ще тут?');
  if (!response) {
    window.close();
  }
}, 5 * 60 * 1000);

document.addEventListener('mousemove', () => {
  clearTimeout(inactivityTimer);
  inactivityTimer = setTimeout(() => {
    const response = confirm('Ви ще тут?');
    if (!response) {
      window.close();
    }
  }, 5 * 60 * 1000);
});
*/

// ========== Задача 16 ==========

/*
const generatePassword = () => {
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const digits = '0123456789';

  let password = '';

  while (true) {
    const length = Math.floor(Math.random() * 15) + 6;

    password = '';

    let numUppercase = 0;
    let numDigits = 0;
    let numUnderscores = 0;

    for (let i = 0; i < length; i++) {
      let char;

      if (i === 0) {
        char =
          uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
        numUppercase++;
      } else if (i === length - 2) {
        char = '_';
        numUnderscores++;
      } else {
        const rand = Math.random();
        if (rand < 0.5 && numUppercase < 2) {
          char =
            uppercaseLetters[
              Math.floor(Math.random() * uppercaseLetters.length)
            ];
          numUppercase++;
        } else if (rand >= 0.5 && numDigits < 5) {
          char = digits[Math.floor(Math.random() * digits.length)];
          numDigits++;
        } else {
          char = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        }
      }

      if (char === password[i - 1] && char === digits) {
        break;
      }

      password += char;
    }

    if (
      numUnderscores === 1 &&
      numUppercase === 2 &&
      numDigits <= 5 &&
      password.length === length
    ) {
      break;
    }
  }

  return password;
};

console.log(generatePassword());
*/

// ========== Задача 17 lodash ==========

/*
const sortArray = (arr) => {
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    const minIndex = _.indexOf(arr, _.min(_.slice(arr, i, j + 1)), i);

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];

    const maxIndex = _.indexOf(arr, _.max(_.slice(arr, i + 1, j + 1)), i + 1);

    [arr[j], arr[maxIndex]] = [arr[maxIndex], arr[j]];
  }

  return arr;
};

console.log(sortArray([1, 4, 5, 7, 32, 67, 4, 8, 12, 7, 25]));
*/
