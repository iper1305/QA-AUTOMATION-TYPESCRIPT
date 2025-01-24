const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const gridSize = 20;
const canvasSize = 400;
canvas.width = canvasSize;
canvas.height = canvasSize;

let snake = [{ x: 160, y: 160 }];
let direction = { x: gridSize, y: 0 };
let food = generateFood();
let gameInterval;
let score = 0;


function startGame() {
    score = 0;
    snake = [{ x: 160, y: 160 }];
    direction = { x: gridSize, y: 0 };
    food = generateFood();

    if (gameInterval) clearInterval(gameInterval);

    gameInterval = setInterval(() => {
        clearCanvas();
        updateSnakePosition();
        checkGameOver();
        drawSnake();
        drawFood();
        drawScore();
    }, 100);
}

function clearCanvas() {
    ctx.fillStyle = '#2C3E50';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function updateSnakePosition() {
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        food = generateFood();
        score += 10;
    } else {
        snake.pop();
    }
}

function drawSnake() {
    snake.forEach((segment, index) => {
        // Head is a different color
        ctx.fillStyle = index === 0 ? '#2ECC71' : '#27AE60';
        ctx.fillRect(segment.x, segment.y, gridSize - 1, gridSize - 1);
    });
}

function generateFood() {
    let newFood;
    do {
        newFood = {
            x: Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize,
            y: Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize
        };
    } while (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    return newFood;
}

function drawFood() {
    ctx.fillStyle = '#E74C3C';
    ctx.fillRect(food.x, food.y, gridSize - 1, gridSize - 1);
}

function drawScore() {
    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.fillText(`Score: ${score}`, 10, 30);
}

function checkGameOver() {
    const head = snake[0];
    if (
        head.x < 0 || head.x >= canvas.width ||
        head.y < 0 || head.y >= canvas.height ||
        snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
    ) {
        clearInterval(gameInterval);
        alert(`Game Over! Final Score: ${score}`);
        startGame();
    }
}

document.addEventListener('keydown', (event) => {
    switch(event.key) {
        case 'ArrowUp':
            if (direction.y === 0) direction = { x: 0, y: -gridSize };
            break;
        case 'ArrowDown':
            if (direction.y === 0) direction = { x: 0, y: gridSize };
            break;
        case 'ArrowLeft':
            if (direction.x === 0) direction = { x: -gridSize, y: 0 };
            break;
        case 'ArrowRight':
            if (direction.x === 0) direction = { x: gridSize, y: 0 };
            break;
    }
});

//Run function
startGame();
