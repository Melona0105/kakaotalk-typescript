import useCustomNavigation from "../hooks/useCustromNavigation";
import {
  CloseButtonHeaderIcon,
  CloseButtonHeaderRightButton,
  CloseButtonHeaderTitle,
  CloseButtonHeaderWrapper,
} from "./CloseButtonHeader.style";

interface ModalHeaderProps {
  title: string;
  rightButtonDisabled?: boolean;
  showPaddingBottom?: boolean;
  onRightButtonClick?: () => void;
}

function CloseButtonHeader({
  title,
  rightButtonDisabled,
  showPaddingBottom,
  onRightButtonClick,
}: ModalHeaderProps) {
  const { goBack } = useCustomNavigation();

  return (
    <CloseButtonHeaderWrapper showPaddingBottom={showPaddingBottom}>
      <CloseButtonHeaderIcon onClick={goBack} />
      <CloseButtonHeaderTitle>{title}</CloseButtonHeaderTitle>
      <CloseButtonHeaderRightButton
        disabled={rightButtonDisabled}
        visibility={onRightButtonClick ? "visible" : "hidden"}
        onClick={onRightButtonClick}
      >
        확인
      </CloseButtonHeaderRightButton>
    </CloseButtonHeaderWrapper>
  );
}

export default CloseButtonHeader;
