import { InputHTMLAttributes } from "react";
import { InputBoxInput } from "./InputBox.style";

interface InputBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  showBorderBottom?: boolean;
}

function InputBox({ showBorderBottom, ...rest }: InputBoxProps) {
  return <InputBoxInput showBorderBottom={showBorderBottom} {...rest} />;
}

export default InputBox;
