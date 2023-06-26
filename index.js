const button = document.getElementById('button');
const form = document.getElementById('form');
const fio = document.getElementById('fio');
const showName = document.getElementById('showName');

const ava = document.getElementById('ava');
const result = document.getElementById('result');
const result2 = document.getElementById('result2');
const result3 = document.getElementById('result3');

const comment = document.getElementById('comment');

function resultFio() {
const fio2 = fio.value;
if(showName.checked && fio.value !== "") {
    const fioNoSpace = fio2.replace(/\s+/g, '');

    const stringFio = fioNoSpace[0].toUpperCase() + fioNoSpace.slice(1).toLowerCase();

    return stringFio;
} else {

    return "username";
}
}

function checkSpam(comment) {

    const checkViagra = comment.value.replace(/viagra/i, '***').replace(/xxx/i, '***');

    return checkViagra;

};


button.onclick = function displayComment() {

    result.innerHTML = resultFio();

    const randomNumber = Math.ceil(Math.random()*5);
console.log(randomNumber);

if ((randomNumber === 1) && (ava.value == "")) {
    result2.innerHTML = `<img src = ${"./img/1.jpg"} width = 100 px height = 150 px>`;
  } else if ((randomNumber === 2) && (ava.value == "")) {
    result2.innerHTML = `<img src = ${"./img/2.jpg"} width = 100 px height = 150 px>`;
  } else if ((randomNumber === 3) && (ava.value == "")) {
    result2.innerHTML = `<img src = ${"./img/3.jpg"} width = 100 px height = 150 px>`;
  } else if ((randomNumber === 4) && (ava.value == "")) {
    result2.innerHTML = `<img src = ${"./img/4.jpg"} width = 100 px height = 150 px>`;
  } else if ((randomNumber === 5) && (ava.value == "")) {
    result2.innerHTML = `<img src = ${"./img/5.jpg"} width = 100 px height = 150 px>`;
  } else if ((randomNumber === 6) && (ava.value == "")) {
    result2.innerHTML = `<img src = ${"./img/6.jpg"} width = 100 px height = 150 px>`;
  } else {

    const link = ava.value;
    result2.innerHTML = `<img src = ${link} width = 100 px height = 150 px>`;

  } // выбираем случайную аватарку, если пользователь не ввёл ссылку

    result3.innerHTML = checkSpam(comment);

    let now = new Date();

    result4.innerHTML = now;

};
