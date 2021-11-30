function login() {
  document.getElementById("signup").style.backgroundColor = getComputedStyle(
    document.querySelector(":root")
  ).getPropertyValue("--nord3");
  document.getElementById("login").style.backgroundColor = getComputedStyle(
    document.querySelector(":root")
  ).getPropertyValue("--nord1");
}

function signup() {
  document.getElementById("login").style.backgroundColor = getComputedStyle(
    document.querySelector(":root")
  ).getPropertyValue("--nord3");
  document.getElementById("signup").style.backgroundColor = getComputedStyle(
    document.querySelector(":root")
  ).getPropertyValue("--nord1");
}
