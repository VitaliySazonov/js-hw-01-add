// Написати програму яка отримає від користувача число (кількість
// хвилин) і виведе на екран строку в форматі години і хвилини
// Приклад 70 покаже 1:10 450 покаже 7:30 1441 покаже 24:1


let num = 70
console.log(`${(num - num%60)/60} : ${num%60}`)