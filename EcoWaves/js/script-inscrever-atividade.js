let btnInscrever = document.querySelector(".btn-enviar")
let checkbox = document.querySelector("#id-termos");
let form = document.querySelector("#form-inscrever")

function isValidEmail(email) {
    // Regex para validar o e-mail
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

btnInscrever.addEventListener("click", ()=>{
    email = document.querySelector("#id-email").value
    if((document.querySelector("#id-nome").value == "") || (email == "")){
        alert("Campo(s) em branco! Preencha-os, por favor.")
    }else{
        if (isValidEmail(email)) {
            form.addEventListener("submit", function(event) {
                if (!checkbox.checked) {
                    alert("Você deve aceitar os termos de uso para continuar.");
                }else{
                    alert(`Já recebemos sua inscrição, agradecemos por ajudar os nossos oceanos! Fique atento no e-mail: "${email}", que te enviaremos mais informações.`)
                }
            });
        } else {
            alert("Por favor, insira um e-mail válido.");
        }
    }
})

