function getStringBySearchKeyword(dataString: string, keyword: string) {
  const len = keyword.length;
  const newData = dataString.split("");
  const arr = [];
  for (let i = 0; i < newData.length; i++) {
    if (i + len <= newData.length) {
      arr.push(newData.slice(i, i + len).join(""));
    }
  }

  const result = arr.filter((el) => el === keyword);
  if (result.length) {
    return true;
  } else {
    return false;
  }
}

export default getStringBySearchKeyword;
