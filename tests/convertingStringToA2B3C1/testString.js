function testString(str) {
//   let str = "AAAABBBCCCCEEAA";

  if (str[0] === "" || str.match(/\d/)) {
        // console.log("str пустая");
    return '';
  }

  let count = 1;
  let startEl = "";
  let endStr = "";

//   console.log(str.length - 1);
  for (let i = 0; i <= str.length; i++) {
    if (startEl === "") {
      startEl = str[i];
      continue;
    }

    if (str[i] === startEl) {
      count = count + 1;
      continue;
    }

    if (str[i] !== startEl) {
      endStr = endStr + startEl + count;
      startEl = str[i];
      count = 1;
      continue;
    }
    if (i === str.length - 1) {
      endStr = endStr + startEl + count;
    }
  }

//   console.log(endStr);
return endStr;
}


module.exports = testString;