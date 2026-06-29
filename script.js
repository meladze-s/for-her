function showScreen(screenId) {
    // Скрываем все экраны
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    // Показываем нужный
    document.getElementById(screenId).classList.add('active');
}

function checkPassword() {
    const input = document.getElementById('password-input').value;
    if (input.toLowerCase() === '123') { // Замените '123' на ваше кодовое слово
        showScreen('screen-menu');
    } else {
        alert('Неверно, попробуй еще раз! ❤️');
    }
}

function quizAnswer(isCorrect) {
    if (isCorrect) {
        alert('Правильно! Держи комплимент: Ты самая лучшая! 🥰');
        showScreen('screen-menu');
    } else {
        alert('Неа, вспоминай лучше! 😉');
    }
}