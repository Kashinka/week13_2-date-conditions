const button = document.getElementById('button');
const form = document.getElementById('form');
const fio = document.getElementById('fio');
const showName = document.getElementById('showName');

const ava = document.getElementById('ava');
const result = document.getElementById('result');
const result2 = document.getElementById('result2');
const result3 = document.getElementById('result3');

const comment = document.getElementById('comment');

showName.addEventListener("input", function () {
    if (showName.checked) {
    fio.style.display = "block";
    } else {
    fio.style.display = "none";
    }
});

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

    const link = ava.value;

    result2.innerHTML = `<img src = ${link} width = 100 px height = 150 px>`;

    result3.innerHTML = checkSpam(comment);

    let now = new Date();

    result4.innerHTML = now;

};
