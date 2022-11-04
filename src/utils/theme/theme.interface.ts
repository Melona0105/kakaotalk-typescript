import { CSSProperties } from "react";
import { MediaQueryType } from "./mediaQueries.interface";

export interface ThemeProps {
  theme: ThemeType;
}

export interface ThemeType {
  config: AppConfigType;
  colors: ColorType;
  spacing: SpacingType;
  fontSize: FontSizeType;
  media: MediaQueryType;
}

interface AppConfigType {
  width: number;
  height: CSSProperties["height"];
  innerContentHeight: CSSProperties["height"];
  borderRadius: CSSProperties["borderRadius"];
}

interface ColorType {
  kakaoDarkGray: string;
  kakaoYellow: string;
  inActive: string;
  black: string;
  white: string;
  gray: string;
  gray2: string;
  gray3: string;
  gray4: string;
  red: string;
  profileDefault: string;
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
  xSmall: string;
  small: string;
  default: string;
  large: string;
  xLarge: string;
  xxLarge: string;
}
