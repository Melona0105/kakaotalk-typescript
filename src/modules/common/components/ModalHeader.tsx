import { useNavigate } from "react-router-dom";
import {
  ModalHeaderCloseIcon,
  ModalHeaderTitle,
  ModalHeaderWrapper,
} from "./ModalHeader.style";

interface ModalHeaderProps {
  title: string;
}

function ModalHeader({ title }: ModalHeaderProps) {
  const navigate = useNavigate();

  return (
    <ModalHeaderWrapper>
      <ModalHeaderCloseIcon onClick={() => navigate(-1)} />
      <ModalHeaderTitle>{title}</ModalHeaderTitle>
    </ModalHeaderWrapper>
  );
}

export default ModalHeader;
