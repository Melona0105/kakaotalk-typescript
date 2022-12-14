import { getMediaQueryStrings } from "./mediaQueries";
import { ThemeType } from "./theme.interface";

export const THEME: ThemeType = {
  config: {
    width: 390,
    height: 640,
    innerContentHeight: 570,
    borderRadius: 10,
    chattingRoomMaxHeight: 520,
  },
  colors: {
    kakaoDarkGray: "#423630",
    kakaoYellow: "#FFE603",
    inActive: "#E7E7E7",
    black: "#000000",
    white: "#FFFFFF",
    gray: "#b7b7b7",
    gray2: "#e6e6e6",
    gray3: "#f6f6f6",
    gray4: "#a6a6a6",
    red: "#e65e3d",
    profileDefault: "#859199",
    chattingDefault: "#abc1d1",
  },
  spacing: {
    xxSmall: 2,
    xSmall: 4,
    small: 8,
    middle: 12,
    large: 16,
    xLarge: 20,
    xxLarge: 40,
  },
  fontSize: {
    xSmall: "0.7rem",
    small: "0.8rem",
    default: "1.0rem",
    large: "1.2rem",
    xLarge: "1.4rem",
    xxLarge: "2.0rem",
  },
  ...getMediaQueryStrings(),
};
