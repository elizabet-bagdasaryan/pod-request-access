const emailFilled = document.getElementById("email");
const submit = document.getElementById("request");
const error = document.getElementById("error");

submit.addEventListener("click", () => {
  const email = emailFilled.value.trim();

  if (email === "") {
    error.innerHTML = "<span>Oops! Please add your email</span>";
    return;
  }

  const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailCheck.test(email)) {
    error.innerHTML = "<span>Oops! Please check your email</span>";
    return;
  } else {
    error.innerHTML = "";
  }
});
