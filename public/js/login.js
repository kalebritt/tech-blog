//login form handler
const loginFormHandler = async function (event) {
  event.preventDefault();

  //query selectors here
  const userNameEl = document.querySelector("#username-input-login");
  const passwordEl = document.querySelector("#password-input-login");

  //fetch response
  const response = await fetch("/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      username: userNameEl.value,
      password: passwordEl.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  //if statement
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to login");
  }
};

//query selector and addEventListener
document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);
