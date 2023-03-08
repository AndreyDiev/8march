const button = document.querySelector('.button');
const title = document.querySelector('.title');

function handl() {
    window.location.href = './image.html';
    console.log(2);
}

button.addEventListener('click', () => {
    title.textContent = 'Идет проверка...';
    setTimeout(handl, 9000);
    
    console.log(1)
})