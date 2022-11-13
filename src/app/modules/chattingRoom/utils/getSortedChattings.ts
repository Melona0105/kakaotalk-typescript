import { isSameMinute } from "date-fns";
import { Chatting } from "domain/entities/chattingEntity";

export interface SortedChattingType extends Omit<Chatting, "text"> {
  chattings: string[];
}

export function getSortedChattings(
  chattings?: Chatting[]
): SortedChattingType[] {
  if (!chattings || chattings?.length === 0) {
    return [];
  }

  return chattings.reduce((acc: SortedChattingType[], cur) => {
    const now = acc[acc.length - 1];
    // 이름이 같은지 확인
    if (now?.userId === cur.userId) {
      // 이름이 같다면, 시간이 같은지 확인한다.
      // 시간이 같다면 그냥 넘어가고,
      // 다르면 데이터에 넣어줘야함

      if (!isSameMinute(new Date(now.createdAt), new Date(cur.createdAt))) {
        acc.push({ ...cur, chattings: [cur.text] });
      } else {
        now.chattings.push(cur.text);
      }
    } else {
      // 이름이 다르면 시간 넣어버림
      acc.push({ ...cur, chattings: [cur.text] });
    }
    return acc.sort((a, b) => {
      return +new Date(a.createdAt) - +new Date(b.createdAt);
    });
  }, []);
}
