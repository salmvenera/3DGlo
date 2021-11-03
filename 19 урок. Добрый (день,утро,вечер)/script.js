'use strict'

let date = new Date();

let days =["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
let clock = new Date().toLocaleTimeString()

let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let message = '';

let newYear = new Date(date.getFullYear() + 1, 0, 1)
let forNewYear = newYear - date
let newYearDays = Math.floor(forNewYear / (24 * 60 * 60 * 1000));
let ampm = hour >= 12 ? ' PM' : ' AM';
  
if (hour > 23 || hour < 7) {
    message = 'Доброй ночи!';
  } else if (hour > 6 && hour < 12) {
    message = 'Доброе утро!';
  } else if (hour > 11 && hour < 19) {
    message = 'Добрый день!';
  } else if (hour > 18 && hour < 24) {
    message = 'Добрый вечер!';
  }

console.log(message);
console.log('Сегодня: ' + days[date.getDay()]);
console.log('Текущее время: ' + clock  + ampm)
console.log('До нового года осталось ' + newYearDays + ' дней, ура!')