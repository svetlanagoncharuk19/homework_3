let age = parseInt(prompt('Введите Ваш возраст'));

if (age % 10 === 1 && age != 11) {
    alert('Вам ' + age + ' год');
} else if ((age % 10 === 2 && age != 12) || (age % 10 === 3 && age != 13) || (age % 10 === 4 && age != 14)) {
    alert('Вам ' + age + ' года');
} else {
    alert('Вам ' + age + ' лет');
}
