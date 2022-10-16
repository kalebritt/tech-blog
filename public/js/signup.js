//signupFormHandler
const signupFormHandler = async function (event) {
  event.preventDefault();

  //query selectors
  const usernameEl = document.querySelector("#username-input-signup");
  const passwordEl = document.querySelector("#password-input-signup");

  //await fetch response
  const response = await fetch("/api/user", {
    method: "POST",
    body: JSON.stringify({
      username: usernameEl.value,
      password: passwordEl.value,
    }),
    headers: { "Content-Type": "application/json" },
  });
  //if statement
  if (respo)
};
