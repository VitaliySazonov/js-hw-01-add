// Написати програму де користувач вводить 3 числа, після вводу всіх
// трьох чисел йому на екрані показується найбільше з них. Додатково
// перевіряти чи це взагалі числа


let nums = [];
for(let i = 0; i < 3; i += 1) {
  if (Number(nums[i])) {
    nums.push(nums[i])
  } else {
    while(!Number(nums[i])) nums[i] = prompt(`Enter number ${i+1}`)
  }
}
console.log(`Numbers ${nums}`, `Max value: ${Math.max(...nums)}`);