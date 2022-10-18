import { CSSProperties, InputHTMLAttributes } from "react";
import {
  InputBoxErrorMessage,
  InputBoxInput,
  InputBoxWrapper,
} from "./InputBox.style";

interface InputBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  showBorderBottom?: boolean;
  borderBottom?: CSSProperties["borderBottom"];
  disableBorderRadius?: boolean;
  paddingTop?: CSSProperties["paddingTop"];
  width?: CSSProperties["width"];
  errorMessage?: string;
  showPadding?: boolean;
}

function InputBox({
  showBorderBottom,
  borderBottom,
  paddingTop,
  width,
  disableBorderRadius,
  errorMessage,
  showPadding,
  ...rest
}: InputBoxProps) {
  return (
    <>
      <InputBoxWrapper
        width={width}
        showBorderBottom={showBorderBottom}
        borderBottom={borderBottom}
        paddingTop={paddingTop}
        showPadding={showPadding}
        disableBorderRadius={disableBorderRadius}
        errorActivated={!!errorMessage}
      >
        <InputBoxInput {...rest} />
      </InputBoxWrapper>
      {errorMessage && (
        <InputBoxErrorMessage>{errorMessage}</InputBoxErrorMessage>
      )}
    </>
  );
}

export default InputBox;
