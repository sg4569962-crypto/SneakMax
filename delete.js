import render_count from "./basket.js";

const deleteItem = async (itemId) => {
    console.log(itemId);
    const userId = localStorage.getItem("userId")

    const req = await fetch(`https://4b72fc9e8b48d19a.mokky.dev/users2/${userId}`);
    const user = await req.json();

    console.log(user);

    const itemBasket = user.basket.filter(el => el.id !== itemId);

    const deleted = await fetch(`https://4b72fc9e8b48d19a.mokky.dev/users2/${userId}`, {
        method: "PATCH",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            basket: itemBasket
        })
    })
    
    render_count()
    console.log(deleted)
}

export default deleteItem
