export interface ThemeProps {
  theme: ThemeType;
}

export interface ThemeType {
  colors: ColorType;
  spacing: SpacingType;
}

interface ColorType {
  kakaoDarkGray: string;
  kakaoYellow: string;
  inActive: string;
  black: string;
  white: string;
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
