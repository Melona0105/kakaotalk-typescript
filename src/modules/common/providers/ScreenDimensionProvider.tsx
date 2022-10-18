import { CSSProperties } from "styled-components";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface DemensionType {
  width: CSSProperties["width"];
  height: CSSProperties["height"];
}

const ScreenDimension = createContext<DemensionType>({
  width: 0,
  height: 0,
});

/**
 * 스크린의 width, height를 추적합니다.
 */
function ScreenDimensionProvider({ children }: { children: ReactNode }) {
  const [dimension, setDimension] = useState<DemensionType>({
    width: 0,
    height: 0,
  });

  function handleScreen() {
    const { innerHeight, innerWidth } = window;
    setDimension({ width: innerWidth, height: innerHeight });
  }

  useEffect(() => {
    window.addEventListener("resize", handleScreen);

    return () => window.removeEventListener("resize", handleScreen);
  }, []);

  return (
    <ScreenDimension.Provider
      value={{ width: dimension.width, height: dimension.height }}
    >
      {children}
    </ScreenDimension.Provider>
  );
}

export default ScreenDimensionProvider;

export function useScreenDimensionContext() {
  return useContext(ScreenDimension);
}
