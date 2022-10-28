//newForHandler
const newFormHandler = async function (event) {
  event.preventDefault();

  //query selectors
  const title = document.querySelector('input[name="post-title"]').value;
  const body = document.querySelector('textarea[name="post-body"]').value;

  //await fetch

  await fetch(`/api/post`, {
    method: "POST",
    body: JSON.stringify({
      title,
      body,
    }),
    headers: { "Content-Type": "application/json" },
  });
  document.location.replace("/dashboard");
};

document
  .querySelector("#new-post-form")
  .addEventListener("submit", newFormHandler);
