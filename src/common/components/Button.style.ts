import styled, { CSSProperties } from "styled-components";

interface ButtonWrapperStyleProps {
  marginTop?: CSSProperties["marginTop"];
  disabled?: boolean;
}

export const ButtonWrapper = styled.div<any>(
  ({ disabled, marginTop }: ButtonWrapperStyleProps) => ({
    border: "1px solid #e7e7e7",
    textAlign: "center",
    padding: 10,
    backgroundColor: disabled ? "#f9f9f9" : "none",
    color: disabled ? "lightgray" : "black",
    marginTop,
    borderRadius: 3,
    cursor: disabled ? "auto" : "pointer",
  })
);
