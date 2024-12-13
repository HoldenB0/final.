let score = 0;
let duck = document.getElementById('duck');
let scoreDisplay = document.getElementById('score');

function updateScore() {
    score++;
    scoreDisplay.textContent = score;
}

function moveDuck() {
    let randomX = Math.random() * (window.innerWidth - 50); 
    let randomY = Math.random() * (window.innerHeight - 50);
    console.log("duck")
    duck.style.left = randomX + 'px';
    duck.style.top = randomY + 'px';
}

duck.addEventListener('click', function() {
    console.log('hi');
    updateScore();
    moveDuck();
});
