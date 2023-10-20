let nav = document.querySelector("aside");
let btn = document.querySelector(".second-nav .icon");
let layer = document.querySelector(".layer");
btn.addEventListener("click", function () {
    nav.classList.toggle("active");
    layer.classList.toggle("active");
});

layer.addEventListener("click", function () {
    nav.classList.toggle("active");
    layer.classList.toggle("active");
})

/////////////

let extra = document.querySelector(".extra");
let sub = document.querySelector(".sub");

extra.addEventListener("click", function () {
    sub.classList.toggle("active");
})