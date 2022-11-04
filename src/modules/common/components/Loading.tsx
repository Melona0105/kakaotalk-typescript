import { Oval } from "react-loader-spinner";
import { useTheme } from "styled-components";

const CIRCLE_SIZE = 35;

function Loading() {
  const theme = useTheme();

  return (
    <Oval
      height={CIRCLE_SIZE}
      width={CIRCLE_SIZE}
      color={theme.colors.black}
      secondaryColor={theme.colors.gray}
      wrapperStyle={{
        position: "absolute",
        top: "0px",
        left: "0px",
        right: "0px",
        bottom: "0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    />
  );
}

export default Loading;
