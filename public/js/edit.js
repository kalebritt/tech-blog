const postId = document.querySelector("input[name='post-id']").value;

//form handler
const editFormHandler = async function (event) {
  event.preventDefault();

  const title = document.querySelector("input[name='post-title']").value;
  const body = document.querySelector("textarea[name= 'post-body']").value;

  await fetch(`/api/post/${postId}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

//delete handler
const deleteClickHandler = async function () {
  await fetch(`/api/post/${postId}`, {
    method: "DELETE",
  });

  document.location.replace("/dashboard");
};
