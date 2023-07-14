const form = document.getElementById("form");
const firstName = document.getElementById("name");
const lastName = document.getElementById("surname");
const cellphone = document.getElementById("number");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    var name = firstName.value.trim();
    var surname = lastName.value.trim();
    var number = cellphone.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();


    if(name.value === ""){
        errorFunc(firstName, "Preencha seu nome");
    }else{
        successFunc(firstName)
    }
})
function errorFunc(req, message){
    const formControl = req.parentElement;
    const span= formControl.querySelector('span');
    span.innerText= message;
    req.classname +='error';
    span.classname +=  'error-text';
}
;