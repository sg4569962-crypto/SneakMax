

import addItem from "./addItem.js";



import deleteItem from "./delete.js";
const cards = document.querySelector(".cards");
const btn = document.querySelector(".btn-sneakers");
const logout = document.querySelector(".btn-logout");
const basket = document.querySelector(".count-basket");
const checks_filter = document.querySelectorAll(".check");
const range = document.querySelector(".range");
const td2 = document.querySelector(".td2")
const btnSizes = document.querySelectorAll(".size-item");
let selectedPol = "";
let selectedSize = "";
// console.log(checks_filter


checks_filter.forEach(el => {
    el.addEventListener("change", (ev) => {
        if(el.checked){
            selectedPol = ev.target.dataset.pol;
            render(selectedSize, selectedPol)

        }else{
            selectedPol = ""
        }
        
    })
})





btnSizes.forEach(el =>{
    el.addEventListener("click", (ev) =>{
        selectedSize = ev.target.dataset.size
        render(selectedSize, selectedPol)
    })
})




const log_container = document.querySelector(".log-container ")
let count = 3;

const render = async (size, pol) => {
    console.log(size)
    const req = await fetch("https://11d61df3b5f6af23.mokky.dev/card");
    let items = await req.json();
    // console.log(items);

    cards.textContent = '';

    if (size) {
        items = items.filter(el => el.size == size);
        console.log(items)
    }



    if(pol){
        items = items.filter(el => el.pol == pol);

    }




    items.slice(0, count).forEach(el => {

        const card_sneakers = document.createElement('div');
        card_sneakers.classList.add('card');

        card_sneakers.innerHTML = `
        <img src="./img/sneakers.png">
        <div class="content-card">
            <p class="text-sneakers">${el.title}</p>
            <p class="price-sneakers">${el.price}</p>
            <span class="size-sneakers">Размер: ${el.size}</span>
            <span class="size-sneakers">Пол: ${el.pol}</span><br>
            <button class="add-btn">Добавить</button>
        </div>

        `;
        card_sneakers.querySelector(".add-btn").addEventListener("click", () => {


            addItem(el)
        })

        cards.appendChild(card_sneakers);


    });
}

btn.addEventListener("click", () => {
    count += 2
    render()
})


render()


logout.addEventListener("click", () => {
    localStorage.removeItem("userId");
    window.location.reload();

})
const userId = localStorage.getItem("userId");
if (userId) {
    log_container.classList.add("auth")
} else {
    log_container.classList.remove("auth")
}




export default render




// range.addEventListener("input", () => {
// //     console.log(range.value)
// //     td2.textContent = range.value
// //     render('', range.value)
// // })