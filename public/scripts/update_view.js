function updateView(userData) {
  $("#btn").text("Logout");
  window.onbeforeunload = function() {
    return "Dude, are you sure you want to leave? Think of the kittens!";
  };
  document.getElementById("btn").removeAttribute("data-target");
  $("#btn").bind("click", function() {
    window.location.assign("/");
  });

  createFlowersEntry(userData);
}

function createFlowersEntry(userData) {
  // add flowers tab
  var tabFlowers_a = document.createElement("a");
  tabFlowers_a.setAttribute("data-toggle", "tab");
  tabFlowers_a.setAttribute("href", "#flowers");
  var tabFlowers_a_txt = document.createTextNode("Flowers Catalog");
  tabFlowers_a.appendChild(tabFlowers_a_txt);
  var tabFlowers = document.createElement("li");
  tabFlowers.setAttribute("id", "flowersTab");
  tabFlowers.appendChild(tabFlowers_a);
  var tabs = document.getElementsByClassName("nav-tabs")[0];
  var aboutTab = document.getElementById("aboutTab");
  tabs.insertBefore(tabFlowers, aboutTab);
  // add flowers div
  var divFlowers = document.createElement("div");
  divFlowers.setAttribute("id", "flowers");
  divFlowers.setAttribute("class", "tab-pane fade");
  var divFlowers_content = document.createTextNode("Flowers Content");
  divFlowers.appendChild(divFlowers_content);
  var tabContent = document.getElementsByClassName("tab-content")[0];
  var about = document.getElementById("about");
  tabContent.insertBefore(divFlowers, about);
  $('.nav-tabs a[href="#flowers"]').on("show.bs.tab", function(event) {
    $(divFlowers).load("/api/flowers", userData);
  });
  $('.nav-tabs a[href="#flowers"]').tab("show");
}
