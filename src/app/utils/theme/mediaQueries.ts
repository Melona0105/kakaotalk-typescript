import {
  MediaQueryDetailType,
  MediaQueryType,
  ScreenWidthType,
} from "./mediaQueries.interface";

export const SCREEN_WIDTH: ScreenWidthType = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

export function getMediaQueryStrings(): { media: MediaQueryType } {
  const up: MediaQueryDetailType = {};
  const down: MediaQueryDetailType = {};

  Object.keys(SCREEN_WIDTH).forEach((key) => {
    up[key] = `@media (min-width: ${SCREEN_WIDTH[key]}px)`;
    down[key] = `@media (max-width: ${SCREEN_WIDTH[key]}px)`;
  });

  return { media: { up, down } };
}
