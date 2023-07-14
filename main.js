const form = document.getElementById("form");
const fname = document.getElementById("name");
const lname= document.getElementById("surname");
const cellphone = document.getElementById("number");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    var firstName = fname.value.trim();
    var lastName = lname.value.trim();
    var number = cellphone.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();


    if(firstName === ""){
        errorFunc(fname, "Este campo não pode estar vazio");
    }
    else{
        successFunc(fname);
    }

    if(lastName === ""){
        errorFunc(lname, "Este campo não pode estar vazio");
    }
    else{
        successFunc(lname);
    }

    

    

    
})
function errorFunc(req, message){
    const formControl = req.parentElement;
    const span= formControl.querySelector('span');
    span.innerText= message;    
    req.className +='error';
    span.className +='error-text';
}
function successFunc(req){

    req.className +='success';
};