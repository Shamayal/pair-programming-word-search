const transpose = function(matrix) {
  let newArray = [];
  for (let i = 0; i < matrix[0].length; i++) {
    newArray.push([]);
  }
  
  for (let array of matrix) {
    for (const [j, num] of array.entries()) {
      newArray[j].push(num);
    }
  }
  return newArray;
};

const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return false;
  }
  // horizontal search
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  
  // vertical search
  let transposedString = transpose(letters);

  const verticalJoin = transposedString.map(ls => ls.join(''));
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  
  return false;
};

module.exports = wordSearch;