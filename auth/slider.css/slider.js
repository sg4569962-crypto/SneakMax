const slider_card = document.querySelectorAll(".slider-card");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let currentIndex = 0;
console.log(slider_card);

next.addEventListener("click", () =>{
    slider_card[currentIndex].classList.remove('active');

    currentIndex++;
    if(currentIndex >= slider_card.length){
        currentIndex = 0;
    }
    slider_card[currentIndex].classList.add('active');
    
}
)

prev.addEventListener("click", () =>{
    slider_card[currentIndex].classList.remove('active');
    currentIndex--;
    if(currentIndex <0){
        currentIndex = slider_card.length - 1
    }
    slider_card[currentIndex].classList.add('active');
})