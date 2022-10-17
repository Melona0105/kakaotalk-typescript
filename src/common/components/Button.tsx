import { ButtonHTMLAttributes, CSSProperties } from "react";
import { ButtonWrapper } from "./Button.style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  marginTop?: CSSProperties["marginTop"];
  backgroundColor?: CSSProperties["backgroundColor"];
  color?: CSSProperties["color"];
  fontSize?: CSSProperties["fontSize"];
}

function Button({ title, marginTop, ...rest }: ButtonProps) {
  return (
    <ButtonWrapper marginTop={marginTop} {...rest}>
      {title}
    </ButtonWrapper>
  );
}

export default Button;
