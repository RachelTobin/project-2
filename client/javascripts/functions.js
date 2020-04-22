// jshint esversion: 6

let containsDuplicates = s => {
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
  //return reversedStr;
  for (let i in reversedStr) {

    let w = reversedStr[i].split("").reverse().join("");

    output.push(w);

  }
  return output.join(" ");
};
