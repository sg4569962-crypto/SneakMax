const modal = document.querySelector(".modal");
const shadow = document.querySelector(".shadow")
const btn_basket = document.querySelector(".basket")
btn_basket.addEventListener("click", () => {
  modal.classList.add("active");
});


shadow.addEventListener("click", () =>{
  modal.classList.remove("active");

})