function postUserData() {
  var userData = {
    userName: document.getElementById("user-name").value,
    password: document.getElementById("pwd").value
  };
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  })
    .then(function(response) {
      if (!response.ok) {
        alert("Error!");
        throw new Error("Wrong credentials");
      } else {
        $("#login").modal("hide");
        updateView(userData);
        window.history.replaceState(
          null,
          null,
          "/?userName=" + userData.userName
        );
      }
    })
    .catch(err => console.log(err));
}
