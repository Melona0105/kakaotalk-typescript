import "styled-components";
import { ThemeType } from "./app/utils/theme/theme.interface";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
