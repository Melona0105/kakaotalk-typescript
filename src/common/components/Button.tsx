import { ButtonHTMLAttributes, CSSProperties } from "react";
import { ButtonWrapper } from "./Button.style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  marginTop?: CSSProperties["marginTop"];
}

function Button({ title, marginTop, ...rest }: ButtonProps) {
  return (
    <ButtonWrapper marginTop={marginTop} {...rest}>
      {title}
    </ButtonWrapper>
  );
}

export default Button;
