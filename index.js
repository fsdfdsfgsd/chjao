
const next = document.querySelector(".next");
let timeId = setInterval(() => {
    next.click();
},3000)


const carousel = document.querySelector(".carousel");
carousel.addEventListener("mouseenter", () => {
    clearInterval(timeId);
})
carousel.addEventListener("mouseleave", () => {
    timeId = setInterval(() => {
        next.click();
    },3000) 
})