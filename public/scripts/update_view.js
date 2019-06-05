function updateView(userData) {
      $("#btn").text("Logout");
      document.getElementById("btn").removeAttribute("data-target");
      $("#btn").bind("click", function() {
        window.location.assign("/");
      });

      var para = document.createElement("p");
      var para = document.createElement("p");
    }