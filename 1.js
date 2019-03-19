let prntNum = Math.floor((Math.random() * 10) + 1);
console.log(prntNum);
function guess() {
    let  num, out;
    num = document.getElementById('innum').value;
    out = document.getElementById('out');

    if (num > 10) {
        out.innerHTML = 'Ого Вы умеете считать больше десяти! Но введите число от 0 до 10'
    }
    else if (num < 0) {
        out.innerHTML = 'Введите положительное число число!'
    }
    else if (num > prntNum){
            out.innerHTML = 'Введите число меньше!'
    }
    else if (num < prntNum){
        out.innerHTML = 'Введите число больше!'
    }
    else {
        out.innerHTML = 'Поздравляю! Вы угадали!'
    }
}