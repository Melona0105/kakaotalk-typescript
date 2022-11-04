import {
  ModalHeaderCloseIcon,
  ModalHeaderTitle,
  ModalHeaderWrapper,
} from "./ModalHeader.style";

interface ModalHeaderProps {
  title: string;
}

function ModalHeader({ title }: ModalHeaderProps) {
  return (
    <ModalHeaderWrapper>
      <ModalHeaderCloseIcon />
      <ModalHeaderTitle>{title}</ModalHeaderTitle>
    </ModalHeaderWrapper>
  );
}

export default ModalHeader;
