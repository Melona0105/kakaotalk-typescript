import { format, isToday } from "date-fns";
import { ko } from "date-fns/locale";

/**
 * 시간을 구분해서 출력하는 함수입니다.
 * 1. 오늘일 경우에는 (오전 02:34)의 형태로 출력합니다.
 * 2. 지난 시각의 경우에는 (11월 10일)의 형태로 출력합니다.
 */
function getTimeStamp(dateString: string) {
  const date = new Date(dateString);

  if (isToday(date)) {
    return format(new Date(dateString), "aaa HH:mm", { locale: ko });
  }
  return format(new Date(dateString), "LLL do", { locale: ko });
}

export default getTimeStamp;
