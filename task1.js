// Выведите в консоль количество минут с 1-го января 1970 года до настоящего момента времени

let date = new Date();

const result = Math.ceil(date.getTime() / (1000 * 60));
console.log (result);

// создайте переменную минуты, которая будет возвращать для даты таймстамп и приведите его к минутам (обращаем ваше внимание что в одной секунде 1000 милисекунд, а в одной минуте 60 секунд)
// выведите результат в консоль

// Если переменная a равна 10, то выведите 'Верно'

const a = 10;
if (a === 10) {
  console.log (true);
};

// Выведите надпись в консоль 'Добро пожаловать на выборы', если число в переменной age (возраст) больше или равно 18

if (age >= 18) {
    console.log('Добро пожаловать на выборы');
};

// Напишите условие: если длина элемента question больше 40, то установите для элемента advice шрифт в 33px (advice.style.fontSize = ...) , и установите для элемента advice шрифт 42px, если условие не выполняется. То есть если длина первого элемента не больше 40.
if (question.length > 40) {
  advice.style.fontSize = '33px';
} else {
  advice.style.fontSize = '42px';
};

// Нужно написать условие для действий пешехода при различных сигналах светофора
// Если сигнал красный, то надо стоять, иначе, если желтый - надо приготовиться, а иначе - можно идти

const signal = "red";
if (signal=="red") {
  console.log("Идти нельзя!");
} else if (signal=="yellow") {
  console.log("Приготовиться...");
} else {
  console.log("Вперёд!");
};
// 1. Если горит красный сигнал, то выводим в консоль "Идти нельзя!"
// 2. Если горит жёлтый сигнал, то выводим в консоль "Приготовиться ..."
// 3. Иначе, выводим в консоль "Вперёд!"

// Перепишите условие используя тернарные операторы

const num = 10
let result

// if (num > 10) {
//   result = 'Число больше 10'
// } else {
//   result = 'Число меньше или равно 10'
// }

// console.log(result)

(num > 10) ? console.log('Число больше 10!') : 
 console.log('Число меньше или равно 10');

 console.log(result)

 // В примере с покупкой автомобиля мы использовали условные конструкции, перепишите пример используя логические операторы. Исходный код:

function checkCar (distance, owner, jacked, cost) {
	if (distance <= 10000) { 
		if (owner === 1) { 
			if (jacked === false) { 
				if (cost <= 5000000) { 
					return true; 
				} else return false;
			} else return false;
		}
		else if (ownersNumber === 2) { 
			if (jacked === false) { 
				if (cost <= 500000) { 
					return true;
				} else return false;
			} else return false
		} else return false;
	} else return false;
}

function checkCar (distance, owner, jacked, cost)  {
	const condition = (distance <= 10000 && owner === 1 && !jacked && cost <= 5000000) || (owner === 2 && !jacked && cost <= 500000);
	return condition;
};
