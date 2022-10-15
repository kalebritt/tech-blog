//logout function
const logout = async function () {
  const response = await fetch("/api/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  //if statement
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to log out");
  }
};
