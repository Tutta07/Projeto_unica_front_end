

const user = document.getElementById("user")
const names = document.getElementById("name")
const password = document.getElementById("password")
const address = document.getElementById("address")
const cnpj = document.getElementById("cnpj")
const email = document.getElementById("email")
const parrafo = document.getElementById("warnings")
const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", e => {
    e.preventDefault()
    let regexEmail = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    let regexCNPJ = /[^\d]+/g;
    

    if (user.value.length < 6) {
        alert ("Enter a valid user name!")
    }
    if (names.value.length < 6) {
        alert("Full name please!") 
    }
    if (!regexEmail.test(email.value)) {
        alert("Email is not correct!")
    }
    if (password.value.length < 8) {
        alert("The password must be 8 digits!")
    }
    if (address.value.length < 5) {
        alert("Full address please!") 
    }
    if (!regexCNPJ.test(cnpj.value)) {
        alert("The CNPJ is not correct") 
    }
   
})
