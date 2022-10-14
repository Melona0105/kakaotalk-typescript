import styled, { CSSProperties } from "styled-components";

interface ButtonWrapperStyleProps {
  marginTop?: CSSProperties["marginTop"];
  disabled?: boolean;
}

export const ButtonWrapper = styled.div<any>(
  ({ disabled, marginTop }: ButtonWrapperStyleProps) => ({
    textAlign: "center",
    padding: 10,
    backgroundColor: disabled ? "#f9f9f9" : "#423630",
    color: disabled ? "lightgray" : "white",
    marginTop,
    borderRadius: 3,
    cursor: disabled ? "auto" : "pointer",
  })
);
