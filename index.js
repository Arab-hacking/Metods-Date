
let today = new Date();
console.log(today.getDate()); // Показывает текущее число
console.log(today.getDay()); // Показывает текущий день недели
console.log(today.getFullYear()); // Показывает текущий Год
console.log(today.getHours()); // Показывает текущий Час
console.log(today.getMilliseconds()); // Показывает текущие Миллисекунды
console.log(today.getMinutes()); // Показывает текущие Минуты
console.log(today.getMonth()); // Показывает текущий Месяц
console.log(today.getSeconds()); // Показывает текущие Секунды
console.log(today.getTime()); // Показывает текущее Время
console.log(today.getTimezoneOffset()); // разницу в минутах между часовым поясом
console.log(today.getUTCDate()); // Показывает текущий ГГлобальное Число
console.log(today.getUTCDay()); // Показывает текущий Глобальный День Недели
console.log(today.getUTCFullYear()); // Показывает текущий Глобальный Год
console.log(today.getUTCHours()); // Показывает текущий Глобальный Час
console.log(today.getUTCMilliseconds()); // Показывает текущие Глобальные Миллисекунды
console.log(today.getUTCMinutes()); // Показывает текущие Глобальные Минуты
console.log(today.getUTCMonth()); // Показывает текущий Глобальный Месяц
console.log(today.getUTCSeconds()); // Показывает текущие Глобальные Секунды
console.log(today.getTimezoneOffset()); // разницу в минутах между Глобальным часовым поясом

// today.setDate(12)
// console.log(today)

// today.setFullYear(1111)
// console.log(today);

// today.setHours(11,11,11,555)
// console.log(today);

// today.setMilliseconds(11212)
// console.log(today);

// today.setMinutes(11,11,11)
// console.log(today);

// today.setMonth(6)
// console.log(today);

// today.setSeconds(9999)
// console.log(today);

// today.setTime(10000,7,7)
// console.log(today);

// today.setUTCDate(12)
// console.log(today)

// today.setUTCFullYear(1111)
// console.log(today);

// today.setUTCHours(11,11,11,555)
// console.log(today);

// today.setUTCMilliseconds(11212)
// console.log(today);

// today.setUTCMinutes(11,11,11)
// console.log(today);

// today.setUTCMonth(6)
// console.log(today);

// today.setUTCSeconds(9999)
// console.log(today);

today.setFullYear(2009)
today.setMonth(1)
today.setDate(25)
today.setHours(15)
today.setMinutes(30)
console.log(today);


console.log(new Date())
let start = new Date(new Date() - (24 * 3600 * 1000) * 4);
console.log(start)