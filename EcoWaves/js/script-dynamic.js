const opcao = sessionStorage.getItem("opcaoEscolhida");
console.log("Opção escolhida:", opcao);

const titulo = document.querySelector("#titulo")

if (opcao == "1") {
  document.querySelector('title').innerHTML = "EcoWaves - Refúgio Azul"
  document.querySelector("#titulo").innerHTML = "<span>|</span> Refúgio Azul";
  document.querySelector("#localizacao").innerHTML = "Rua Mazargão, Zona Rural, Nobres, Mato Grosso";
  document.querySelector("#img-principal").src = "../img/ongs/ondas-do-mar 1.png";
  document.querySelector("#hr1").innerHTML = "7hr às 10hr";
  document.querySelector("#pr1").innerHTML = "Passeio guiado sobre limpeza costeira";
  document.querySelector("#pr2").innerHTML = "Almoço com a equipe";
  document.querySelector("#hr2").innerHTML = "11hr ás 13hr";
  document.querySelector("#pr3").innerHTML = "Mergulho Guiado";
  document.querySelector("#hr3").innerHTML = "14hr ás 16hr";
  document.querySelector("#pr4").innerHTML = "Retorno";
  document.querySelector("#hr4").innerHTML = "17hr";
  document.querySelector("#descricao").innerHTML = "Refúgio Água Azul, fica localizado ao lado do aquário encantado e reino com aproximadamente 54 km de Nobres Mato Grosso, no local tem flutuação de 800 metros em superfície, incluso equipamentos e guia local, tem o tirolesa de 66 metros que cai direto no balneário que depois da flutuação e tirolesa o turista pode fica no balneário, o lugar é uma mata fechada com um cerrado maravilhoso que o turista pode aproveitar com muita sombra.";
  document.querySelector("#parc1").src = "../img/atividade/pousada1.png";
  document.querySelector("#parc2").src = "../img/atividade/pousada2.png";
  document.querySelector("#parc3").src = "../img/atividade/pousada3.png";
  document.querySelector("#logo-ong").src = "../img/atividade/refugio_azul.png";
  document.querySelector("#nome-ong").innerHTML = "Refúgio Azul";
  document.querySelector("#descricao-ong").innerHTML =
    "Refúgio Água Azul, fica localizado ao lado do aquário encantado e reino com aproximadamente 54 km de Nobres Mato Grosso, no local tem flutuação de 800 metros em superfície, incluso equipamentos e guia local, tem o tirolesa de 66 metros que cai direto no balneário que depois da flutuação e tirolesa o turista pode fica no balneário, o lugar é uma mata fechada com um cerrado maravilhoso que o turista pode aproveitar com muita sombra.";
} else if (opcao == "3") {
  document.querySelector('title').innerHTML = "EcoWaves - EcoSurf"
  titulo.innerHTML = "EcoSurf";
  document.querySelector("#localizacao").innerHTML =
    "Rua Osmar Goncalves Nina, 49 JARDIM BOPIRANGA ITANHAEM - SP";
  document.querySelector("#img-principal").src = "../img/ongs/ondas-do-mar 1.png";
  document.querySelector("#pr1").innerHTML = "Limpeza subaquatica";
  document.querySelector("#hr1").innerHTML = "08h às 10h";  
  document.querySelector("#pr2").innerHTML = "Almoço com a Equipe";
  document.querySelector("#hr2").innerHTML = "11hr ás 13hr";
  document.querySelector("#pr3").innerHTML = "Mergulho guiado";
  document.querySelector("#hr3").innerHTML = "14hr ás 16hr ";
  document.querySelector("#pr4").innerHTML = "Retorno";
  document.querySelector("#hr4").innerHTML = "17hr";
  document.querySelector("#descricao").innerHTML =
    "O programa de Voluntariado Ecosurf possibilita a todos participantes a oportunidade de aprender na prática os valores da cidadania ambiental, meios para atuação em rede, cyberativismo, promoção de ações direta e mobilização. Através de uma grande rede de voluntários é possível potencializar e democratizar práticas que encorajam as pessoas na mudança de hábitos e atitudes para a proteção das praias e oceano.";
  document.querySelector("#parc1").src = "../img/atividade/pousada1.png";
  document.querySelector("#parc2").src = "../img/atividade/pousada2.png";
  document.querySelector("#parc3").src = "../img/atividade/pousada3.png";
  document.querySelector("#logo-ong").src = "../img/atividade/ecosurf-logo.jpeg";
  document.querySelector("#nome-ong").innerHTML = "EcoSurf";
  document.querySelector("#descricao-ong").innerHTML = "O programa de Voluntariado Ecosurf possibilita a todos participantes a oportunidade de aprender na prática os valores da cidadania ambiental, meios para atuação em rede, cyberativismo, promoção de ações direta e mobilização. Através de uma grande rede de voluntários é possível potencializar e democratizar práticas que encorajam as pessoas na mudança de hábitos e atitudes para a proteção das praias e oceano.";
}
