import render from "./script.js";

const btnSizes = document.querySelectorAll(".size-item");


btnSizes.forEach(el =>{
    el.addEventListener("click", (ev) =>{
        // console.log(ev.target.dataset.size)
        render(ev.target.dataset.size)
    })
})

console.log(btnSizes);