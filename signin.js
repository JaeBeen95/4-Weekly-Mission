const form = document.querySelector(".fm-input-wrap");
const btn = document.querySelector(".btn-submit");

const showErrorMsg = (e) => {
  const message = e.target.value;

  if (e.target.type === "email") {
    const emailMsgBox = document.querySelector(".error-email");
    message
      ? emailValid(e.target.value)
        ? (emailMsgBox.innerHTML = "")
        : (emailMsgBox.innerHTML = "올바른 이메일 주소가 아닙니다.")
      : (emailMsgBox.innerHTML = "이메일을 입력해 주세요.");
  } else if (e.target.type === "password") {
    const passwordMsgBox = document.querySelector(".error-pw");
    message ? (passwordMsgBox.innerHTML = "") : (passwordMsgBox.innerHTML = "비밀번호를 확인해 주세요.");
  }
};

const moveFolderPage = (e) => {
  const email = document.querySelector(".input-email").value;
  const password = document.querySelector(".input-pw").value;
  const emailMsgBox = document.querySelector(".error-email");
  const passwordMsgBox = document.querySelector(".error-pw");

  if (email === "test@codeit.com" && password === "codeit101") {
    location.href = "folder.html";
  }

  emailMsgBox.innerHTML = email !== "test@codeit.com" ? "이메일을 확인해 주세요." : "";
  passwordMsgBox.innerHTML = password !== "codeit101" ? "비밀번호를 확인해 주세요." : "";
};

const enter = (e) => {
    if(e.key === 'Enter'){
        moveFolderPage();
    }
  }

form.addEventListener("focusout", showErrorMsg);
btn.addEventListener("click", moveFolderPage);
form.addEventListener("keydown", enter);

function emailValid(email) {
  regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  if (!regex.test(email)) {
    return false;
  } else {
    return true;
  }
}
