let starIcon = document.querySelector("#star-icon");
const icon1 = '../img/atividade/star.png';
const icon2 = '../img/atividade/star-pintada.png';

starIcon.addEventListener('click', () => {
    if (starIcon.src.endsWith('star.png')){
        starIcon.src = icon2
    } else {
        starIcon.src = icon1
    }
});
