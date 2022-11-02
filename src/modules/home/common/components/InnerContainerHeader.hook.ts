import { HEADER_IMAGE } from "../utils/homeConstants";

interface HeaderItemsType {
  id: number;
  src?: string;
  onClick: () => void;
}

function useInnerContainerHeader(tabIndex: number) {
  const HEADER_ITEMS: HeaderItemsType[] = [
    { id: 0, src: HEADER_IMAGE[tabIndex][0], onClick: () => console.log(1) },
    { id: 1, src: HEADER_IMAGE[tabIndex][1], onClick: () => console.log(2) },
  ];

  return {
    models: {
      HEADER_ITEMS,
    },
  };
}

export default useInnerContainerHeader;
