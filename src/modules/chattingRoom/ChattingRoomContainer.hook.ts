import chattingRoomApis from "apis/chattingRoomApis";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

function useChattingRoomContainer() {
  // 룸 아이디를 바탕으로 룸 정보를 쿼리합니다.
  const { roomId } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await chattingRoomApis.getChattingRoomInfo(roomId!),
    retry: false,
  });

  return {
    models: {
      data,
      isLoading,
      isError,
    },
    operations: {},
  };
}

export default useChattingRoomContainer;
