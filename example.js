const fs = require("fs");
let data = "";
try {
  data = fs.readFileSync("input.text", "utf8");
  //console.log(data)
} catch (err) {
  console.error(err);
}
//spliting the input
let wordArr = data.split(" ");

/**
 * GetOccurrence method designates the amount of times a value repeated in array
 * @param {*} array 
 * @param {*} value 
 * @returns 
 */
function getOccurrence(array, value) {
  var n = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] == value) {
      n++;
    }
  }
  return n;
}

/**
 * GetMostRepeatedElements methos is for most repeated elemets in an
 * @param {*} wordArr 
 * @returns 
 */
function getMostRepeatedElements(wordArr) {
  let list = {};
  let tops = [];
  let n = 0;
  let arr = new Set(wordArr);

  arr.forEach((el) => {
    list[el] = getOccurrence(wordArr, el);
  });

  console.log(list);
  tops = Object.keys(list).sort(function (a, b) {
    return list[a] - list[b];
  });
  Object.values(list).forEach((x) => {
    if (x > 1) {
      n = x;
    }
  });
  if (n > 1) {
    return tops.slice(-n).reverse();
  } else if ((n = 1)) {
    return "ALL CLEAR";
  }
}
getMostRepeatedElements(wordArr).forEach(val =>{
    console.log(val)
});



/*wordArr.forEach((el) => {
    list[el] = ++list[el] || 1;
  });*/
