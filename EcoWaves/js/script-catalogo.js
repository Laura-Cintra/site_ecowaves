let botoes = document.querySelectorAll(".btn-confira") 

botoes.forEach((item, i)=>{
    item.addEventListener('click', ()=>{
        if(i==0){
            console.log("oi")
            sessionStorage.setItem('opcaoEscolhida', 1);
            window.location.href = '../html/atividade.html';
        }else if(i==1){
            sessionStorage.setItem('opcaoEscolhida', 2);
            window.location.href = '../html/atividade.html';
        }else if(i==2){
            sessionStorage.setItem('opcaoEscolhida', 3);
            window.location.href = '../html/atividade.html';
        }
    })
})
