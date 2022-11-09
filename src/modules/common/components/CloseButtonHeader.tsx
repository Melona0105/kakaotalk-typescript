import useCustomNavigation from "../hooks/useCustromNavigation";
import {
  CloseButtonHeaderIcon,
  CloseButtonHeaderTitle,
  CloseButtonHeaderWrapper,
} from "./CloseButtonHeader.style";

interface ModalHeaderProps {
  title: string;
}

function CloseButtonHeader({ title }: ModalHeaderProps) {
  const { goBack } = useCustomNavigation();

  return (
    <CloseButtonHeaderWrapper>
      <CloseButtonHeaderIcon onClick={goBack} />
      <CloseButtonHeaderTitle>{title}</CloseButtonHeaderTitle>
    </CloseButtonHeaderWrapper>
  );
}

export default CloseButtonHeader;
