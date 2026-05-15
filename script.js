const cards = document.querySelector(".cards");
const btn = document.querySelector(".btn-sneakers")
let count = 2;
const render = async() =>{
    const req = await fetch("https://5e6b53ef5266adea.mokky.dev/card");
    const items = await req.json();
    console.log(items);

    cards.textContent = '';


    items.slice(0, count).forEach(el => {

        const card_sneakers = document.createElement('div');
        card_sneakers.classList.add('card-sneakers');

        card_sneakers.innerHTML = `
        <img src="./img/sneakers.png">
        <p class="text-sneakers">${el.title}</p>
        <p class="price-sneakers">${el.price}</p>

        `

        cards.appendChild(card_sneakers);

        
    });
}

btn.addEventListener("click", () =>{
    count += 2
    render()
})


render()