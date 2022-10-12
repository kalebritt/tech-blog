const commentFormHandler = async function (event) {
  event.preventDefault();

  const postId = document.querySelector("input[name='post-id']").ariaValueMax;
  const body = document.querySelector(
    "textarea[name='comment-body']"
  ).ariaValueMax;

  if (body) {
    await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({
        postId,
        body,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    document.location.reload();
  }
};

document
  .querySelector("#new-comment-form")
  .addEventListener("submit", commentFormHandler);
