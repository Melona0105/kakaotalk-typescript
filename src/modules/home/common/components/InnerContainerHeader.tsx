import useInnerContainerHeader from "./InnerContainerHeader.hook";
import {
  InnerContaienrHeaderImage,
  InnerContaienrHeaderTitle,
  InnerContainerHeaderWrapper,
} from "./InnerContainerHeader.style";

interface InnerContainerHeaderProps {
  title: string;
  tabIndex: number;
}

/**
 * 홈의 내부 컨테이너들의 헤더를 렌더링하는 컴포넌트입니다.
 */
function InnerContainerHeader({ title, tabIndex }: InnerContainerHeaderProps) {
  const { models } = useInnerContainerHeader(tabIndex);
  const { HEADER_ITEMS } = models;

  return (
    <InnerContainerHeaderWrapper>
      <InnerContaienrHeaderTitle showPaddingTop={tabIndex === 2}>
        {title}
      </InnerContaienrHeaderTitle>

      <div>
        {HEADER_ITEMS.map((item, index) => (
          <InnerContaienrHeaderImage
            key={item.id}
            src={item.src}
            visiblity={!!item.src}
            showMarginRight={index !== HEADER_ITEMS.length - 1}
            onClick={item.onClick}
          />
        ))}
      </div>
    </InnerContainerHeaderWrapper>
  );
}

export default InnerContainerHeader;
