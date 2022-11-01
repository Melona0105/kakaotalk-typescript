import { ReactNode } from "react";
import { LayoutDiv, LayoutWrapper } from "./Layout.style";

/**
 * 앱 전체에 씌우는 레이아웃을 적용하는 컴포넌트입니다.
 */
function Layout({ children }: { children: ReactNode }) {
  return (
    <LayoutWrapper>
      <LayoutDiv>{children}</LayoutDiv>
    </LayoutWrapper>
  );
}

export default Layout;
