import { CSSProperties } from "react";
import { ButtonWrapper } from "./Button.style";

interface ButtonProps {
  buttonTitle: string;
  marginTop?: CSSProperties["marginTop"];
  disabled?: boolean;
}

function Button({ buttonTitle, disabled, marginTop }: ButtonProps) {
  return (
    <ButtonWrapper disabled={disabled} marginTop={marginTop}>
      {buttonTitle}
    </ButtonWrapper>
  );
}

export default Button;
