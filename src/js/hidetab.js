//Hide tab

const form = document.querySelector(".container");
const button = document.querySelector(".X");

//Close button
button.addEventListener("click", () => { button ? form.style.display = "none" : window.style.display = "block"; });

//show the tab after a certain time
const timer = setInterval(() => { form.style.display = "block"; }, 3000);

