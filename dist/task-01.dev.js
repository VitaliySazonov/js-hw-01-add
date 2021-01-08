"use strict";

// Завдання: Написати програму яка буде перевіряти чи рік народження
// користувача був високосним
// Наприклад: 2000, 2004, 2016 - <strong>високосні</strong> 1998,
// 2002, 1900 2100 - <strong> не високосні</strong>
var year = 2616;
var isLeapYear = !(new Date(year, 1, 29).getMonth() - 1);
console.log(isLeapYear);
//# sourceMappingURL=task-01.dev.js.map
