export interface ScreenWidthType {
  [key: string]: number;
}

export interface MediaQueryDetailType {
  [key: string]: string;
}

export interface MediaQueryType {
  up: MediaQueryDetailType;
  down: MediaQueryDetailType;
}
