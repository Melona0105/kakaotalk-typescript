import { MelonIcon, MelonText, MelonWrapper } from "./Melon.style";

interface MelonProps {
  title: string;
  onClick: () => void;
}

/**
 * 유저 프로필의 음악을 나타내는 컴포넌트입니다.
 */
function Melon({ title, onClick }: MelonProps) {
  return (
    <MelonWrapper onClick={onClick}>
      <MelonText>{title}</MelonText>
      <MelonIcon />
    </MelonWrapper>
  );
}

export default Melon;
