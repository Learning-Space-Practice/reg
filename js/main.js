const enterBtn = document.querySelector(".enter-btn");
const registrationBtn = document.querySelector(".registration-btn");
const box = document.querySelector(".enter");
const box2 = document.querySelector(".enter-registration");

enterBtn.addEventListener("click", () => {
  box.classList.add("active");
  box2.classList.remove("active");
  console.log("click");
});

registrationBtn.addEventListener("click", () => {
  box2.classList.add("active");
  box.classList.remove("active");
  console.log("click");
});
