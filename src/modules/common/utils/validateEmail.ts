/**
 * 이메일 밸리데이션 함수입니다.
 * 유효하면 true, 유효하지 않으면 false
 */
function validateEmail(email: string) {
  const emailRegex =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  return emailRegex.test(email);
}

export default validateEmail;
