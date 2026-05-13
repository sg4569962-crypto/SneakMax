const input_login = document.querySelector(".login");
const input_pass = document.querySelector(".pass");
const input_pass2 = document.querySelector(".pass2");
const reg_btn = document.querySelector(".reg-btn");
const error_text = document.querySelector(".error-text");


reg_btn.addEventListener("click", async() =>{
    if(!input_login.value || !input_pass.value || !input_pass2.value){
        error_text.textContent = "Заполните данные";
        return;
    }

    const req = await fetch("https://4b72fc9e8b48d19a.mokky.dev/users2");
    const users = await req.json();

    const exists = users.find(us => us.login === input_login.value);

    if(exists){
        error_text.textContent = "Такой пользователь уже существует";
        return;
    }

    if(input_pass.value !== input_pass2.value){
        error_text.textContent = "Пароли не совпадают";
        return;
    }


    await fetch('https://4b72fc9e8b48d19a.mokky.dev/users2',{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            login:input_login.value,
            pass:input_pass.value,
            basket:[]
        })
    })

    
    window.location.reload()

})