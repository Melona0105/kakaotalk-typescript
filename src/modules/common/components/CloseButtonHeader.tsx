import { useNavigate } from "react-router-dom";
import {
  CloseButtonHeaderIcon,
  CloseButtonHeaderTitle,
  CloseButtonHeaderWrapper,
} from "./CloseButtonHeader.style";

interface ModalHeaderProps {
  title: string;
}

function CloseButtonHeader({ title }: ModalHeaderProps) {
  const navigate = useNavigate();

  return (
    <CloseButtonHeaderWrapper>
      <CloseButtonHeaderIcon onClick={() => navigate(-1)} />
      <CloseButtonHeaderTitle>{title}</CloseButtonHeaderTitle>
    </CloseButtonHeaderWrapper>
  );
}

export default CloseButtonHeader;
