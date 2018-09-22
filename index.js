var line = [];
var h1 = document.querySelector('h2');
var table = document.querySelector('table');
var obj = JSON.parse(localStorage.getItem('stats')) || { // Получаем данные игрока по имени, или создаем
    wins: 0,
    loses: 0
};
var wins = obj.wins;
var loses = obj.loses;
var random_o;
var i = 0;

function random(a, b) {
    var random1 = Math.random();
    var random = Math.floor(random1 * (a - b) + b);
    return random;
}

function game(numb) {
    i++;
    random_o = random(0, 8);
    line[numb] = 'X';
    document.getElementById(numb).innerHTML = `<span>+</span>`;
    if (line[random_o] === 'X' || line[random_o] === 'O' && i < 9) {
        try {
            game(numb);
        } catch {

        }
    } else if (line[random_o] !== 'X' && line[random_o] !== 'O') {
        line[random_o] = 'O';
        document.getElementById(random_o).innerHTML = `<span>o</span>`;
    }
    if (line[0] === 'X' &&
        line[1] === 'X' &&
        line[2] === 'X' ||
        line[3] === 'X' &&
        line[4] === 'X' &&
        line[5] === 'X' ||
        line[6] === 'X' &&
        line[7] === 'X' &&
        line[8] === 'X' ||
        line[0] === 'X' &&
        line[3] === 'X' &&
        line[6] === 'X' ||
        line[1] === 'X' &&
        line[4] === 'X' &&
        line[7] === 'X' ||
        line[2] === 'X' &&
        line[5] === 'X' &&
        line[8] === 'X' ||
        line[0] === 'X' &&
        line[4] === 'X' &&
        line[8] === 'X' ||
        line[6] === 'X' &&
        line[4] === 'X' &&
        line[2] === 'X') {
        wins++;
        localStorage.setItem('stats', JSON.stringify({
                wins: wins,
                loses: loses
            })) // Сохранили результат в localstorage
        var conf = confirm('X - WIN, хотите сыграть еще разок?');
        if (conf) {
            line = [];
            for (var i = 0; i < 9; i++) {
                document.getElementById(i).innerHTML = '';
            }
            h1.innerHTML = `Побед - ${wins}, поражений - ${loses}`;
        } else {
            return;
        }
    } else if (line[0] === 'O' &&
        line[1] === 'O' &&
        line[2] === 'O' ||
        line[3] === 'O' &&
        line[4] === 'O' &&
        line[5] === 'O' ||
        line[6] === 'O' &&
        line[7] === 'O' &&
        line[8] === 'O' ||
        line[0] === 'O' &&
        line[3] === 'O' &&
        line[6] === 'O' ||
        line[1] === 'O' &&
        line[4] === 'O' &&
        line[7] === 'O' ||
        line[2] === 'O' &&
        line[5] === 'O' &&
        line[8] === 'O' ||
        line[0] === 'O' &&
        line[4] === 'O' &&
        line[8] === 'O' ||
        line[6] === 'O' &&
        line[4] === 'O' &&
        line[2] === 'O') {
        loses++;
        localStorage.setItem("stats", JSON.stringify({
                wins: wins,
                loses: loses
            })) // Сохранили результат в localstorage
        var conf = confirm('O - WIN, хотите сыграть еще разок?');
        if (conf) {
            line = [];
            for (var i = 0; i < 9; i++) {
                document.getElementById(i).innerHTML = '';
            }
            h1.innerHTML = `Побед - ${wins}, поражений - ${loses}`;
        } else {
            return;
        }
    }
}

function check_game() {

}