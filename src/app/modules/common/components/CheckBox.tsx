import { CheckBoxIcon, CheckBoxWrapper } from "./CheckBox.style";

interface CheckBoxProps {
  isSelected: boolean;
  showPaddingRight?: boolean;
}

function CheckBox({ isSelected, showPaddingRight }: CheckBoxProps) {
  return (
    <CheckBoxWrapper showPaddingRight={showPaddingRight}>
      <CheckBoxIcon isSelected={isSelected} />
    </CheckBoxWrapper>
  );
}

export default CheckBox;
