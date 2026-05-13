const input_login = document.querySelector(".login");
const input_pass = document.querySelector(".pass");

const reg_btn = document.querySelector(".reg-btn");
const error_text = document.querySelector(".error-text");


reg_btn.addEventListener("click", async() =>{
    if(!input_login.value || !input_pass.value){
        error_text.textContent = "Заполните данные";
        return;
    }

    const req = await fetch("https://4b72fc9e8b48d19a.mokky.dev/users2");
    const users = await req.json();

    const exists = users.find(us => us.login === input_login.value && us.pass ===input_pass.value );

    if(!exists){
        error_text.textContent = "Логин или пароль не верны";
        return;
    }

    alert("Вы вошли ")

    window.location.reload()

})