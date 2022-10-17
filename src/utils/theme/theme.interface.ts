import { MediaQueryType } from "../../common/utils/mediaQueries.interface";

export interface ThemeProps {
  theme: ThemeType;
}

export interface ThemeType {
  colors: ColorType;
  spacing: SpacingType;
  fontSize: FontSizeType;
  media: MediaQueryType;
}

interface ColorType {
  kakaoDarkGray: string;
  kakaoYellow: string;
  inActive: string;
  black: string;
  white: string;
  gray: string;
}

interface SpacingType {
  xxSmall: number;
  xSmall: number;
  small: number;
  middle: number;
  large: number;
  xLarge: number;
  xxLarge: number;
}

interface FontSizeType {
  small: string;
  default: string;
  large: string;
  xLarge: string;
  xxLarge: string;
}
