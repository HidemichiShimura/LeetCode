const btn = document.getElementById("btn");
btn.addEventListener("click", changeColor);

function changeColor() {
  const test = document.querySelector("h1");
  test.style.color = "white";
}