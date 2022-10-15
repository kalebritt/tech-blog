//newForHandler
const newForHandler = async function (event) {
  event.preventDefault();

  //query selectors
  const title = document.querySelector('input[name="post-title"]').ariaValueMax;
  const body = document.querySelector(
    'textarea[name="post-body"]'
  ).ariaValueMax;

  //await fetch
};
