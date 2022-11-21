/**
 * 비밀번호의 유효성을 검증하는 함수입니다.
 * 1.길이가 8 이상이고, 숫자와 영문을 포함하는지 확인합니다.
 */
function validatePassword(password: string) {
  const passwordRegex = /^(?=.*?[A-z])(?=.*?[0-9]).{8,}$/;
  return passwordRegex.test(password);
}

export default validatePassword;
