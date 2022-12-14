import { ChangeEvent, useMemo } from "react";
import useInnerContainerHeader from "./InnerContainerHeader.hook";
import SearchInput from "./SearchInput";
import {
  InnerContaienrHeaderImage,
  InnerContaienrHeaderTitle,
  InnerContainerHeaderDiv,
  InnerContainerHeaderWrapper,
} from "./InnerContainerHeader.style";

interface InnerContainerHeaderProps {
  title: string;
  searchKeyword?: string;
  showPaddingTop?: boolean;
  onSearchKeywordChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClearSearchKewordClick?: () => void;
}

/**
 * 홈의 내부 컨테이너들의 헤더를 렌더링하는 컴포넌트입니다.
 */
function InnerContainerHeader({
  title,
  searchKeyword,
  showPaddingTop,
  onSearchKeywordChange,
  onClearSearchKewordClick,
}: InnerContainerHeaderProps) {
  const { models, operations } = useInnerContainerHeader(
    onClearSearchKewordClick
  );
  const { showSearchInput, headerItems } = models;
  const { onESCKeyPress } = operations;
  const MemoriezedHeaderDiv = useMemo(
    () => (
      <InnerContainerHeaderDiv>
        <InnerContaienrHeaderTitle showPaddingTop={showPaddingTop}>
          {title}
        </InnerContaienrHeaderTitle>
        <div>
          {headerItems?.map((item, index) => (
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
    [headerItems, title]
  );

  const MemorizedSearchInput = useMemo(
    () =>
      showSearchInput &&
      headerItems && (
        <SearchInput
          searchKeyword={searchKeyword}
          onSearchKeywordChange={onSearchKeywordChange}
          onClearSearchKewordClick={onClearSearchKewordClick}
          onESCKeyPress={onESCKeyPress}
        />
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
