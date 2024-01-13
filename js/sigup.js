const inputUsernameRegister = document.querySelector(".js-auth-form__input-user");
const inputPasswordRegister = document.querySelector(".js-auth-form__input-password");
const btnRegister = document.querySelector(".js-btn-regin");

btnRegister.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      inputUsernameRegister.value === "" ||
      inputPasswordRegister.value === ""
    ) {
      alert("vui lòng không để trống");
    } else {
      // array user
      const user = {
        username: inputUsernameRegister.value,
        password: inputPasswordRegister.value,
      };
      let json = JSON.stringify(user);
      localStorage.setItem(inputUsernameRegister.value, json);
      window.location.href = "đăng nhập.html";
    }
  });