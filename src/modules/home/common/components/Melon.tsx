import { MelonIcon, MelonText, MelonWrapper } from "./Melon.style";

/**
 * 유저 프로필의 음악을 나타내는 컴포넌트입니다.
 */
function Melon() {
  return (
    <MelonWrapper>
      <MelonText>엄마의 프로필 사진은 왜 꽃밭일까 - 김진호</MelonText>
      <MelonIcon />
    </MelonWrapper>
  );
}

export default Melon;
