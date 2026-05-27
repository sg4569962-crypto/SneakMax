const count_basket = document.querySelector(".count-basket");
const container_basket = document.querySelector(".container-card");
const no_card = document.querySelector(".no-card")

const render_count = async() =>{
    const userId = localStorage.getItem("userId");

    if(!userId){
        return
    }

    const req = await fetch(`https://4b72fc9e8b48d19a.mokky.dev/users2/${userId}`);

    const user = await req.json();
    count_basket.textContent = user.basket.length

    if(user.basket.length < 1){
        no_card.classList.add('active');
        return; 
    }

    user.basket.forEach(el => {

        const card = document.createElement("div");

        card.classList.add('card-modal')

        card.innerHTML = `
        <img src="./img/sneakers.png" alt="" class="img-modal" />
              <div>
                <p class="title-modal">${el.title}</p>
                <p class="price-moadal">${el.price} ₽</p>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi-basket2"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0z"
                />
                <path
                  d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6z"
                />
              </svg>
        
        `
        container_basket.appendChild(card);
        
    });


    console.log(user.basket)

}

render_count()

export default render_count