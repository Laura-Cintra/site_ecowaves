let btnInscrever = document.querySelector("#inscrever")

function isValidEmail(email) {
    // Regex para validar o e-mail
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

btnInscrever.addEventListener("click", ()=>{
    email = document.querySelector("#id-email").value
    if((email == " ") || (document.querySelector("#id-nome").value == "")){
        alert("Campo(s) em branco! Preencha-os, por favor.")
    }else{
        if (isValidEmail(email)) {
           alert("VC TA REGISTRADO")
        } else {
            alert("Por favor, insira um e-mail válido.");
        }
    }
   
})