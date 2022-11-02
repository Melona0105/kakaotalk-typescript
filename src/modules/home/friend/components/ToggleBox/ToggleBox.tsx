import { ReactNode } from "react";
import useToggleBox from "./ToggleBox.hook";
import { ToggleBoxDiv, ToggleBoxImage, ToggleBoxText } from "./ToggleBox.style";
import showChildrenIcon from "assets/icons/menu_open.png";
import hideChildrenIcon from "assets/icons/menu_close.png";

interface ToggleBoxProps {
  title: string;
  children: ReactNode;
}

/**
 * 토글 형식으로 childrend을 on/off하는 컴포넌트입니다.
 */
function ToggleBox({ title, children }: ToggleBoxProps) {
  const { models, operations } = useToggleBox();
  const { showChildren } = models;
  const { toggleShowChildren } = operations;

  return (
    <div>
      <ToggleBoxDiv>
        <ToggleBoxText>{title}</ToggleBoxText>
        <ToggleBoxImage
          src={showChildren ? hideChildrenIcon : showChildrenIcon}
          onClick={toggleShowChildren}
        />
      </ToggleBoxDiv>
      {showChildren && children}
    </div>
  );
}

export default ToggleBox;
