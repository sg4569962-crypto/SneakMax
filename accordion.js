const items = document.querySelectorAll(".item");

items.forEach(item =>{
    const btn = item.querySelector(".title");
    btn.addEventListener('click', () =>{
        items.forEach(i =>{
            if(i !== item) i.classList.remove("active");
        });

        item.classList.toggle("active");
    });
    

})
