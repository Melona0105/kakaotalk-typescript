import styled from "styled-components";

interface InputBoxInputStyleProps {
  showBorderBottom: boolean;
}

export const InputBoxInput = styled.input<any>(
  ({ showBorderBottom }: InputBoxInputStyleProps) => ({
    width: 230,
    outline: "none",
    border: "none",
    margin: 0,
    padding: 10,
    borderBottom: showBorderBottom ? "1px solid #e7e7e7" : "none",
    borderTopLeftRadius: showBorderBottom ? 3 : 0,
    borderTopRightRadius: showBorderBottom ? 3 : 0,
    borderBottomRightRadius: showBorderBottom ? 0 : 3,
    borderBottomLeftRadius: showBorderBottom ? 0 : 3,
  })
);
