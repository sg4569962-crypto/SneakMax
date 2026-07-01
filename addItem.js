import render_count from "./basket.js";

const not = document.querySelector(".not")




const addItem = async(el) =>{
    console.log(el);
    const id = localStorage.getItem("userId");


    if(!id){
        alert("Вы не авторизованы");
        return
    }

    const req = await fetch(`https://4b72fc9e8b48d19a.mokky.dev/users2/${id}`);
    const user = await req.json();

    console.log(user);



    const updateBasket = [...user.basket, el];

    


    const add = await fetch(`https://4b72fc9e8b48d19a.mokky.dev/users2/${id}`,{
        method:"PATCH",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            basket:updateBasket
        })
    });

    console.log(add);

    if(!add.ok){
        alert("Произошла ошибка");
        return
    }

    render_count()


    not.classList.add("active");

    setTimeout(() =>{
        not.classList.remove("active");


    }, 1200)




}




export default addItem