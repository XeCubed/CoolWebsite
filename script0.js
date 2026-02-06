const button0=document.getElementById("btn0");
const desc0=document.getElementById("btn-desc0");

const button1=document.getElementById("btn1");
const desc1=document.getElementById("btn-desc1");

button0.addEventListener("mouseenter", () => {
  desc0.style.visibility = "visible";
});

button0.addEventListener("mouseleave", () => {
  desc0.style.visibility = "hidden";
});

button1.addEventListener("mouseenter", () => {
  desc1.style.visibility = "visible";
});

button1.addEventListener("mouseleave", () => {
  desc1.style.visibility = "hidden";
});