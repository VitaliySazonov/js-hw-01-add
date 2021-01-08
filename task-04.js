//Написати програму яка буде переводити температуру з цельсія в
//фаренгейти, або навпаки з фаренгейта в цельсії

let
  number = prompt('Температура'),
  scale = prompt('Шкала ( c | f )'),
  celsius = (number * 9 / 5) + 32, // C2F
  fahrenheit = (number - 32) * 5 / 9 // F2C

alert(
  scale === 'c'
    ? `Температура \nпо Цельсию: ${number}, \nпо Фаренгейту: ${fahrenheit} `
    : scale === 'f'
    ? `Температура \nпо Цельсию: ${celsius}, \nпо Фаренгейту: ${number}`
    : undefined
)


