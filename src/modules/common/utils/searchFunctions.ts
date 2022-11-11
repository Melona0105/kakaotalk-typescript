/**
 * username이 포함된 배열을 username검색어를 바탕으로 검색한 결과를 리턴하는 함수입니다.
 */
export function getSortedDataByUsernameKeyword(
  originalData?: any[],
  searchKeyword?: string
) {
  if (originalData && searchKeyword) {
    const newData = originalData?.filter(
      (data) =>
        data.username && getStringBySearchKeyword(data.username, searchKeyword)
    );

    return newData;
  } else return originalData;
}

/**
 * 주어진 string으로 부터 keyword가 포함되었는지를 체크해서 리턴하는 함수입니다.
 */
export function getStringBySearchKeyword(dataString: string, keyword: string) {
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
