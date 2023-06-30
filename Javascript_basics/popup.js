//popup configuration

const button = document.querySelector("button");
const popup = document.querySelector(".popup-wrapper");
const close = document.querySelector(".popup-close");

button.addEventListener("click", () => {
  popup.style.display = "block";
});
close.addEventListener("click", () => {
  popup.style.display = "none";
});
popup.addEventListener("click", () => {
  popup.style.display = "none";
});

//if you read this, please make sure to add more things here
