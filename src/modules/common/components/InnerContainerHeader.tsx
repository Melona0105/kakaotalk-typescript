import { ChangeEvent, useMemo } from "react";
import useInnerContainerHeader from "./InnerContainerHeader.hook";
import {
  InnerContaienrHeaderImage,
  InnerContaienrHeaderTitle,
  InnerContaienrSearchInput,
  InnerContaienrSearchInputClearIcon,
  InnerContaienrSearchInputDiv,
  InnerContaienrSearchInputIcon,
  InnerContainerHeaderDiv,
  InnerContainerHeaderWrapper,
} from "./InnerContainerHeader.style";

interface InnerContainerHeaderProps {
  title: string;
  searchKeyword?: string;
  onSearchKeywordChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClearSearchKewordClick?: () => void;
}

/**
 * 홈의 내부 컨테이너들의 헤더를 렌더링하는 컴포넌트입니다.
 */
function InnerContainerHeader({
  title,
  searchKeyword,
  onSearchKeywordChange,
  onClearSearchKewordClick,
}: InnerContainerHeaderProps) {
  const { models, operations } = useInnerContainerHeader(
    onClearSearchKewordClick
  );
  const { index, showSearchInput, headerItems } = models;
  const { onESCKeyPress } = operations;
  const MemoriezedHeaderDiv = useMemo(
    () => (
      <InnerContainerHeaderDiv>
        <InnerContaienrHeaderTitle showPaddingTop={index === 2}>
          {title}
        </InnerContaienrHeaderTitle>
        <div>
          {headerItems.map((item, index) => (
            <InnerContaienrHeaderImage
              key={item.id}
              src={item.src}
              visiblity={!!item.src}
              showMarginRight={index !== headerItems.length - 1}
              onClick={item.onClick}
            />
          ))}
        </div>
      </InnerContainerHeaderDiv>
    ),
    [headerItems, index, title]
  );

  const MemorizedSearchInput = useMemo(
    () =>
      showSearchInput &&
      headerItems && (
        <InnerContaienrSearchInputDiv>
          <InnerContaienrSearchInputIcon />
          <InnerContaienrSearchInput
            value={searchKeyword}
            autoFocus
            onChange={onSearchKeywordChange}
            onKeyDown={onESCKeyPress}
          />
          {searchKeyword && (
            <InnerContaienrSearchInputClearIcon
              onClick={onClearSearchKewordClick}
            />
          )}
        </InnerContaienrSearchInputDiv>
      ),
    [
      showSearchInput,
      searchKeyword,
      headerItems,
      onSearchKeywordChange,
      onESCKeyPress,
      onClearSearchKewordClick,
    ]
  );
  return (
    <InnerContainerHeaderWrapper>
      {MemoriezedHeaderDiv}
      {MemorizedSearchInput}
    </InnerContainerHeaderWrapper>
  );
}

export default InnerContainerHeader;
