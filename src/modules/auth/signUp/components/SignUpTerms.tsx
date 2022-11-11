import { useMemo } from "react";
import { SIGN_UP_TERMS } from "../common/utils/signUpConstants";
import {
  SignUpTermsIcon,
  SignUpTermsIconDiv,
  SignUpTermsPhrase,
  SignUpTermsTextDiv,
  SignUpTermsTitle,
  SignUpTermsDiv,
  SignUpTermsHeader,
  SignUpTermsWrapper,
} from "./SignUpTerms.style";

interface SignUpTermsProps {
  termsIndexes: boolean[];
  onTermClick: (index: number) => void;
}

/**
 * 각 이용약관들을 렌더링하는 컴포넌트입니다.
 */
function SignUpTerms({ termsIndexes, onTermClick }: SignUpTermsProps) {
  const MemorizedSignUpTerms = useMemo(
    () => (
      <SignUpTermsWrapper>
        <SignUpTermsHeader>
          카카오계정 <br />
          서비스 약관에 동의해 주세요.
        </SignUpTermsHeader>

        {SIGN_UP_TERMS.map((term, index) => {
          const { id, title, phrase, required } = term;

          return (
            <SignUpTermsDiv
              key={id}
              showBottomborder={index === 0}
              onClick={() => onTermClick(index)}
            >
              <SignUpTermsIconDiv>
                <SignUpTermsIcon isSelected={termsIndexes[index]} />
              </SignUpTermsIconDiv>

              <SignUpTermsTextDiv>
                <SignUpTermsTitle>
                  {index > 1 && (required ? "[필수] " : "[선택] ")} {title}
                </SignUpTermsTitle>
                {phrase &&
                  phrase.map((text, index) => (
                    <SignUpTermsPhrase key={index}>{text}</SignUpTermsPhrase>
                  ))}
              </SignUpTermsTextDiv>
            </SignUpTermsDiv>
          );
        })}
      </SignUpTermsWrapper>
    ),
    [termsIndexes, onTermClick]
  );

  return MemorizedSignUpTerms;
}

export default SignUpTerms;
