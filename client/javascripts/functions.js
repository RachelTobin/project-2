// jshint esversion: 6

let old = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};



//Req. 3a
let revWords1 = s => {
  let reversedStr = "";
  let output = [];
  reversedStr = s.split(" ");
  for (let i in reversedStr) {
    let w = reversedStr[i].split("").reverse().join("");
    output.push(w);
  }
  return output.join(" ");
};



//Req. 3b
let revWords2 = s => {
  let reversedStr = "";
  let output = [];
  reversedStr = s.split(" ");
  //return reversedStr;
  reversedStr.forEach(function(item) {
    let w = item.split("").reverse().join("");
    output.push(w);
  });
  return output.join(" ");
};



//Req. 3c
let revWords3 = s => {
  let reversedStr = "";
  let output = [];
  reversedStr = s.split(" ");
  for (let element of reversedStr) {
    let w = element.split("").reverse().join("");
    output.push(w);
  }
  return output.join(" ");
};



//Extra Credit!
let containsDuplicates = s => {
  let arr = s.split("");
  for (let i in arr) {
    let test = s.charCodeAt(i);
    let skip = i;
    for (let j in arr){
      if (test == s.charCodeAt(j) && (j != skip)) {
        console.log("match");
        return true;
      }
    }
  }
  return false;
};
