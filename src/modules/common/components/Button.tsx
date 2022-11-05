import { ButtonHTMLAttributes, CSSProperties } from "react";
import { ButtonWrapper } from "./Button.style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  marginTop?: CSSProperties["marginTop"];
  backgroundColor?: CSSProperties["backgroundColor"];
  color?: CSSProperties["color"];
  fontSize?: CSSProperties["fontSize"];
  width?: CSSProperties["width"];
  padding?: CSSProperties["padding"];
}

function Button({ title, marginTop, width, ...rest }: ButtonProps) {
  return (
    <ButtonWrapper marginTop={marginTop} width={width} {...rest}>
      {title}
    </ButtonWrapper>
  );
}

export default Button;
