const button = document.getElementById('button');

const result = document.getElementById('result');

const form = document.getElementById('form');

const fio = document.getElementById('fio');

function resultFio() {

const fio2 = fio.value;

const fioNoSpace = fio2.replace(/\s+/g, '');

const stringFio = fioNoSpace[0].toUpperCase() + fioNoSpace.slice(1).toLowerCase();

return stringFio;

};

const ava = document.getElementById('ava');

const result2 = document.getElementById('result2');

const result3 = document.getElementById('result3');

const comment = document.getElementById('comment');

function checkSpam(comment) {

    const checkViagra = comment.value.replace(/viagra/i, '***').replace(/xxx/i, '***');

    return checkViagra;

};


button.onclick = function displayComment() {

    result.innerHTML = resultFio();

    const link = ava.value;

    result2.innerHTML = `<img src = ${link} width = 100 px height = 150 px>`;

    result3.innerHTML = checkSpam(comment);

};