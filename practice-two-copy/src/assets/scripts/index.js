function setNav() {
  var nav = document.getElementById("nav-dropdown");
  var navClass = "sub-menu";

  if (nav.className === navClass) {
    nav.className += " enabled";
  }
  else {
    nav.className = navClass;
  }
}
