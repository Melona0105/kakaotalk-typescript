import InnerContainerHeader from "app/modules/common/components/InnerContainerHeader";
import { InnerContaienrWrapper } from "app/modules/home/common/styles/homeStyles";
import firebaseIcon from "assets/icons/viewmore_firebase.png";
import githubIcon from "assets/icons/viewmore_github.png";
import reactQueryIcon from "assets/icons/viewmore_react_query.png";
import reactIcon from "assets/icons/viewmore_react.png";
import socketIOIcon from "assets/icons/viewmore_socketIO.svg";
import {
  ViewMoreSectionBottomDiv,
  ViewMoreSectionDiv,
  ViewMoreSectionIcon,
  ViewMoreSectionText,
  ViewMoreSectionTextDiv,
  ViewMoresStackDiv,
} from "./ViewMoreSection.style";


interface ViewMoreItemType {
  id: number;
  src: string;
  onClick: () => void;
}

const viewMoreItems: ViewMoreItemType[] = [
  {
    id: 0,
    src: githubIcon,
    onClick: () =>
      window.open("https://github.com/Melona0105/kakaotalk-typescript"),
  },
  {
    id: 1,
    src: reactIcon,
    onClick: () => window.open("https://ko.reactjs.org/"),
  },
  {
    id: 2,
    src: reactQueryIcon,
    onClick: () =>
      window.open(
        "https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/"
      ),
  },
  {
    id: 3,
    src: socketIOIcon,
    onClick: () => window.open("https://socket.io/"),
  },
  {
    id: 4,
    src: firebaseIcon,
    onClick: () => window.open("https://firebase.google.com/"),
  },
];

function ViewMoreSection() {
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
