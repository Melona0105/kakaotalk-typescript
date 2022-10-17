import "styled-components";
import { ThemeType } from "./utils/theme/theme.interface";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
