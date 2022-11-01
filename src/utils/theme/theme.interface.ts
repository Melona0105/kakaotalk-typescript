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
  width: CSSProperties["width"];
  height: CSSProperties["height"];
  borderRadius: CSSProperties["borderRadius"];
}

interface ColorType {
  kakaoDarkGray: string;
  kakaoYellow: string;
  inActive: string;
  black: string;
  white: string;
  gray: string;
  red: string;
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
