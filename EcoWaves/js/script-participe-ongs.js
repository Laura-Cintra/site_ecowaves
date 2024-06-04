let btnConsulta = document.querySelector("#consulta")
let cnpj = document.querySelector("#id-cnpj").value
let boxDetalhes = document.querySelector("#boxDetalhes")

function mascaraCNPJ(cnpj) {
    cnpj = cnpj.replace(/\D/g, "") // Remove tudo que não é dígito
    cnpj = cnpj.replace(/^(\d{2})(\d)/, "$1.$2") // Coloca ponto entre o segundo e o terceiro dígitos
    cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3") // Coloca ponto entre o quinto e o sexto dígitos
    cnpj = cnpj.replace(/\.(\d{3})(\d)/, ".$1/$2") // Coloca uma barra entre o oitavo e o nono dígitos
    cnpj = cnpj.replace(/(\d{4})(\d)/, "$1-$2") // Coloca um hífen entre o décimo terceiro e o décimo quarto dígitos
    return cnpj
}

function isValidEmail(email) {
    // Regex para validar o e-mail
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

document.querySelector("#id-cnpj").addEventListener('input', function(e) {
    e.target.value = mascaraCNPJ(e.target.value)
})

btnConsulta.addEventListener("click", ()=>{
    boxDetalhes.style.display = 'block';
})

btnConsulta.addEventListener("click", ()=>{
    cnpj = document.querySelector("#id-cnpj").value
    email = document.querySelector("#id-email").value
    boxDetalhes = document.querySelector("#boxDetalhes")
    console.log(cnpj.length)
    if((document.querySelector("#id-cnpj").value == "") || (document.querySelector("#id-rs").value == "") || (document.querySelector("#id-email").value == "")){
        alert("Campo(s) em branco! Preencha-os, por favor.")
    }else{
        if (isValidEmail(email)) {
            if(cnpj.length < 18){
                alert("O CNPJ deve ter 14 digitos")
            }else{
                event.preventDefault()
                alert("Está tudo correto, agora você pode adicionar sua atividade.")
                boxDetalhes.style.display = 'block';
            }
        } else {
            alert("Por favor, insira um e-mail válido.");
        }
    }
})
email = document.querySelector("#id-email").value

let btnDados = document.querySelector("#dados")
btnDados.addEventListener("click", ()=>{
    alert(`Agradecemos por mandar sua atividade e por sempre fazer o bem para o meio ambiente. Nós iremos analisa-la e retornaremos para o email "${email}" sobre os resultados.`)
})

