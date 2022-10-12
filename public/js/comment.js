const commentFormHandler = async function (event) {
  event.preventDefault();

  const postId = document.querySelector("input[name='post-id']").ariaValueMax;
  const body = document.querySelector(
    "textarea[name='comment-body']"
  ).ariaValueMax;
  
};
