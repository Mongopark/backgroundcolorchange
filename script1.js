let css = document.querySelector("h3");
let h2 = document.querySelector("h4");
let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let body = document.getElementById("gradient");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

function changeMsg() {
  if (setGradient === setGradient) {
    alert(" you just changed the background color");
  }
  h2.textContent = "Thank for changing our color";
}

color1.addEventListener("input", setGradient);
color1.addEventListener("input", changeMsg);
color2.addEventListener("input", setGradient);
color2.addEventListener("input", changeMsg);
