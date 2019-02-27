let prntNum = Math.floor((Math.random() * 10) + 1);
console.log(prntNum);
function guess() {
    let  num, out;
    num = document.getElementById('innum').value;
    out = document.getElementById('out');

    if (num > prntNum){
        out.innerHTML = 'Введите число меньше!'
    }
    else if (num < prntNum){
        out.innerHTML = 'Введите число больше!'
    }
    else {
        out.innerHTML = 'Поздравляю! Вы угадали!'
    }
}