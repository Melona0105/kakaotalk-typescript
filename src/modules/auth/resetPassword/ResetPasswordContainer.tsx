import Button from "modules/common/components/Button";
import InputBox from "modules/common/components/InputBox";
import { useMemo } from "react";
import { useTheme } from "styled-components";
import useResetPasswordContainer from "./ResetPasswordContainer.hook";
import {
  ResetPasswordContainerDiv,
  ResetPasswordContainerHeader,
  ResetPasswordContainerText,
  ResetPasswordContainerWrapper,
} from "./ResetPasswordContainer.style";

/**
 * 비밀번호 재설정 메일을 전송하는 컴포넌트입니다.
 */
function ResetPasswordContainer() {
  const theme = useTheme();
  const { models, inputOperations, operations } = useResetPasswordContainer();
  const { isCompleted, isSending, state, buttonDisabled } = models;
  const { onSendEmailClick, onNavigateLoginPress } = operations;

  const MemorizedEmailInput = useMemo(
    () =>
      !isCompleted && (
        <InputBox
          placeholder="이메일 주소 입력"
          type="email"
          borderBottom={`1px solid ${theme.colors.inActive}`}
          disableBorderRadius
          showPadding={false}
          value={state.email}
          {...inputOperations}
          errorMessage={state.emailErrorMessage}
        />
      ),
    [state, inputOperations, theme.colors.inActive, isCompleted]
  );

  const MemorizedButton = useMemo(
    () =>
      isCompleted ? (
        <Button
          title="로그인 화면으로 이동하기"
          marginTop={theme.spacing.xxLarge}
          onClick={onNavigateLoginPress}
        />
      ) : (
        <Button
          title={
            isSending ? "이메일 전송 중..." : "비밀번호 재설정 이메일 전송"
          }
          disabled={isSending || buttonDisabled}
          marginTop={theme.spacing.xxLarge}
          onClick={onSendEmailClick}
        />
      ),
    [
      theme.spacing.xxLarge,
      isSending,
      buttonDisabled,
      isCompleted,
      onSendEmailClick,
      onNavigateLoginPress,
    ]
  );

  return (
    <ResetPasswordContainerWrapper>
      <ResetPasswordContainerHeader>
        비밀번호 재설정
      </ResetPasswordContainerHeader>
      <ResetPasswordContainerDiv>
        <ResetPasswordContainerText>
          {isCompleted
            ? "이메일이 전송되었습니다."
            : "가입시 사용한 이메일 주소를 입력해주세요."}
        </ResetPasswordContainerText>
        {MemorizedEmailInput}
        {MemorizedButton}
      </ResetPasswordContainerDiv>
    </ResetPasswordContainerWrapper>
  );
}

export default ResetPasswordContainer;
