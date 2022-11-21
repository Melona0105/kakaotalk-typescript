import hideChildrenIcon from "assets/icons/menu_close.png";
import showChildrenIcon from "assets/icons/menu_open.png";
import { ReactNode } from "react";
import useHomeToggleBox from "./HomeToggleBox.hook";
import { HomeToggleBoxDiv, HomeToggleBoxImage, HomeToggleBoxText } from "./HomeToggleBox.style";

interface ToggleBoxProps {
  title: string;
  children: ReactNode;
  initialState?: boolean;
}

/**
 * 토글 형식으로 children을 on/off하는 컴포넌트입니다.
 */
function HomeToggleBox({ title, children, initialState = false }: ToggleBoxProps) {
  const { models, operations } = useHomeToggleBox(initialState);
  const { showChildren } = models;
  const { toggleShowChildren } = operations;

  return (
    <div>
      <HomeToggleBoxDiv>
        <HomeToggleBoxText>{title}</HomeToggleBoxText>
        <HomeToggleBoxImage
          src={showChildren ? hideChildrenIcon : showChildrenIcon}
          onClick={toggleShowChildren}
        />
      </HomeToggleBoxDiv>
      {showChildren && children}
    </div>
  );
}

export default HomeToggleBox;
