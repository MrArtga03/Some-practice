const post = document.querySelector(".post");
const likesEl = document.querySelector(".likes");
const heart = document.querySelector(".heart-icon");

likesEl.innerText = "No likes yet";

let counter = 0;
post.addEventListener("dblclick", () => {
    counter++;

    if (counter === 1) {
        likesEl.innerText = counter + " like";
    } else {
        likesEl.innerText = counter + " likes";
    }

    heart.classList.add("animate-like");
    setTimeout (() => {
        heart.classList.remove("animate-like");
    }, 800);
});

//Info

const info = document.querySelector(".container-info");
const btnInfo = document.querySelector(".icon-info");

btnInfo.addEventListener("click", () => { if (btnInfo) info.style.display = "block"; });