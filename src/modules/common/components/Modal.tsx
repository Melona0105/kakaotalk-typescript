import { ReactNode } from "react";
import ModalWrapper from "react-modal";

interface ModalProps {
  children: ReactNode;
  showModal: boolean;
  onCloseModalClick: () => void;
}

function Modal({ children, showModal, onCloseModalClick }: ModalProps) {
  return (
    <ModalWrapper
      isOpen={showModal}
      onRequestClose={onCloseModalClick}
      overlayElement={(props, contentElement) => (
        <div
          {...props}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
          onClick={onCloseModalClick}
        >
          {contentElement}
        </div>
      )}
      contentElement={(props, children) => (
        <div {...props} style={{}}>
          {children}
        </div>
      )}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
    >
      {children}
    </ModalWrapper>
  );
}

export default Modal;
