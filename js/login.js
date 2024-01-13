// validation form login
const inputUsername = document.querySelector(".js-auth-form__input-login");
const inputPassword = document.querySelector(".js-auth-form__input-password");
const btnLogin = document.querySelector(".js-btn-login");

// validation form login

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputUsername.value === "" || inputPassword.value === "") {
    alert("vui lòng không để trống");
  } else {
    const user = JSON.parse(localStorage.getItem(inputUsername.value));
    if (
      user.username === inputUsername.value &&
      user.password === inputPassword.value
    ) {
      window.location.href = "trangchu user.html";
    } else {
      alert("Đăng Nhập Thất Bại");
    }
  }
});