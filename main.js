let result = null
function numb(value) {
    if(value>7){
        result = (`Привет`)
    } else result = null
}
function name(value) {
    if (value === `Вячеслав`){
    result = (`Привет, Вячеслав`)
    }
    else {
        result = (`Нет такого имени`)
        }
}
function array(value) {
    const valueToArray = value.split(`,`)
    console.log(typeof valueToArray)
    result = []
    for (let i = 0; i < valueToArray.length; i++) {
        if (valueToArray[i] % 3 === 0) {
            result.push(valueToArray[i])
        }}
}
// Для запуска через консоль
// console.log(`Введите чило, Имя или массив (с использованием [])`)
// function main(value) {
//     if (typeof value == "number") {
//         a(value)
//     } else if (typeof value == "string"){
//         b(value)
//     } else if (typeof value == "object"){
//         c(value)
//     } else {
//         const result = (`Некорректные данные`)
//     }
// }
document.getElementById("button1").onclick = handler1;
function handler1() {
    const value = +document.getElementById("value1").value
    numb(value)
    document.getElementById("result1").textContent = result;
}

document.getElementById("button2").onclick = handler2;
function handler2() {
    const value = document.getElementById("value2").value
    name(value)
    document.getElementById("result2").textContent = result;
}

document.getElementById("button3").onclick = handler3;
function handler3() {
    const value = document.getElementById("value3").value
    array(value)
    document.getElementById("result3").textContent = result;
}

