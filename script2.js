
const themeImages = document.querySelectorAll('.tema .img');
const body = document.body;


function changeTheme(theme) {
  
    body.classList.remove('dark-theme', 'warm-theme');
    

    if (theme) {
        body.classList.add(theme);
    }
}


themeImages.forEach((image, index) => {
    image.addEventListener('click', () => {
       
        if (index === 0) {
            changeTheme('dark-theme');  
        } else if (index === 1) {
            changeTheme('');  
        } else if (index === 2) {
            changeTheme('warm-theme');  
        }
    });
});

const heart = document.querySelector('.heart');
const likesNumber = document.querySelector('.likes-number');


let initialLikes = localStorage.getItem('likes') ? parseInt(localStorage.getItem('likes')) : 28;
likesNumber.textContent = `❤️ ${initialLikes}`;

heart.onclick = function () {
  heart.classList.toggle('added');

  initialLikes = heart.classList.contains('added') 
    ? initialLikes + 1 
    : initialLikes - 1;
  
  likesNumber.textContent = `❤️ ${initialLikes < 0 ? 0 : initialLikes}`;
  localStorage.setItem('likes', initialLikes);
};


document.addEventListener('DOMContentLoaded', function () {
    const cookiesAgreement = document.querySelector('.cookies-agreement');
    const cookiesButton = document.querySelector('.cookies-button');

    if (cookiesButton) {
        // Створюємо напівпрозорий шар для блокування взаємодії
        let overlay = document.createElement('div');
        overlay.classList.add('overlay');
        document.body.appendChild(overlay);

        // Кнопка закриває cookie-повідомлення і знімає блокування
        cookiesButton.addEventListener('click', function () {
            cookiesAgreement.classList.add('cookies-agreement-closed');  // Сховати повідомлення
            overlay.style.display = 'none';  // Видалити overlay
        });
    } else {
        console.error('Кнопка не знайдена');
    }
});

