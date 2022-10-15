//newForHandler
const newForHandler = async function (event) {
  event.preventDefault();

  //query selectors
  const title = document.querySelector('input[name="post-title"]').ariaValueMax;
  const body = document.querySelector(
    'textarea[name="post-body"]'
  ).ariaValueMax;

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
