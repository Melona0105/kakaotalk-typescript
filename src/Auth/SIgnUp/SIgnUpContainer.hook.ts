import { useState } from "react";
import { SIGN_UP_TERMS } from "./common/utils/signUpConstants";

const INITIAL_STATE = new Array(SIGN_UP_TERMS.length).fill(false);
const ALL_AGREE = new Array(SIGN_UP_TERMS.length).fill(true);

/**
 * 회원가입시 필요한 상태와 상태를 변화시키는 함수를 정의하는 훅입니다.
 */
function useSignUpContainer() {
  const [termsIndexes, setTermsIndexes] = useState<boolean[]>(INITIAL_STATE);

  /**
   * 각 약관들을 클릭했을 경우에 작동하는 함수입니다.
   */
  function onTermClick(index: number) {
    // 첫번째 상태는 전체동의 혹은 전체 해제 입니다.
    if (index === 0) {
      if (termsIndexes[index]) {
        setTermsIndexes(INITIAL_STATE);
      } else {
        setTermsIndexes(ALL_AGREE);
      }
    }
    // 그 외
    else {
      const newIndexes = [...termsIndexes];
      newIndexes[index] = !newIndexes[index];

      // 모든 버튼이 다 눌리거나, 다눌렸는데, 하나가 떨어질 경우
      const currentTerms = [...termsIndexes].filter((term) => term === true);
      const activeTerms = [...newIndexes].filter((term) => term === true);
      // 7개 눌리느 순간, 전부다 누른것으로 변경
      if (currentTerms.length === 6 && activeTerms.length === 7) {
        setTermsIndexes(ALL_AGREE);
        return;
      } else if (currentTerms.length === 8 && activeTerms.length === 7) {
        newIndexes[0] = false;
        setTermsIndexes(newIndexes);
        return;
      }

      setTermsIndexes(newIndexes);
    }
  }

  function onAgreeButtonPress() {
    alert("동의하고 다음 화면으로");
  }

  return {
    models: {
      termsIndexes,
    },
    operations: {
      onTermClick,
      onAgreeButtonPress,
    },
  };
}

export default useSignUpContainer;
