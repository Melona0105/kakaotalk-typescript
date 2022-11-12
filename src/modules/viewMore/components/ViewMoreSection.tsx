import InnerContainerHeader from "modules/common/components/InnerContainerHeader";
import { InnerContaienrWrapper } from "modules/home/common/styles/homeStyles";
import useViewMoreSection from "./ViewMoreSection.hook";
import {
  ViewMoreSectionBottomDiv,
  ViewMoreSectionDiv,
  ViewMoreSectionIcon,
  ViewMoreSectionText,
  ViewMoreSectionTextDiv,
  ViewMoresStackDiv,
} from "./ViewMoreSection.style";

function ViewMoreSection() {
  const { models } = useViewMoreSection();
  const { viewMoreItems } = models;

  return (
    <InnerContaienrWrapper>
      <InnerContainerHeader title="더보기" showPaddingTop />
      <ViewMoreSectionDiv>
        <ViewMoreSectionTextDiv>
          <ViewMoreSectionText>created by Melona0105</ViewMoreSectionText>
        </ViewMoreSectionTextDiv>
        <ViewMoreSectionBottomDiv>
          {viewMoreItems.map((item) => (
            <ViewMoresStackDiv key={item.id}>
              <ViewMoreSectionIcon src={item.src} onClick={item.onClick} />
            </ViewMoresStackDiv>
          ))}
        </ViewMoreSectionBottomDiv>
      </ViewMoreSectionDiv>
    </InnerContaienrWrapper>
  );
}

export default ViewMoreSection;
