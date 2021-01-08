// Написати гру камінь ножиці папір. Де компютер загадує своє
// значення потім користувач вводить свій варіант і далі ми бачимо
// результат на екпані хто виграв

let userChoice = prompt("Do you choose Rock, Paper, or Scissors?");
userChoice = userChoice.toLowerCase();
const rules = {'rock': 'scissors', 'paper': 'rock', 'scissors': 'paper'};
const choices = Object.keys(rules);
const computerChoice = choices[Math.floor(Math.random() * 3)];
let userBeats;

console.log(
  choices.indexOf(userChoice) < 0 ?
    `You entered an invalid choice` :
    userChoice === computerChoice ?
      `Tie!! Computer ${computerChoice}. You ${userChoice}` :
      rules[userChoice] === computerChoice ?
        `You won with ${userChoice} vs ${computerChoice}` :
        `Computer won with ${computerChoice} vs ${userChoice}`
)