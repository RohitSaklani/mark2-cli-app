const input = require('readline-sync');
let ans = input.question("Tell me your name : ");
console.log("welcome " + ans + " to game 'how much do you love bikes' ");
let score = 0;


let questionaire = [
  { question: " Who is manufacturing company of mt15 ? ",option1:"hero",option2:"bajaj",option3:"yamaha",option4:"honda", answer: 'yamaha' },
  { question: "which is top selling bike segment in india ?  ",option1:"cruiser",option2:"sports",option3:"cafe-racer",option4:"adventure", answer: 'cruiser' },
  { question: " which company recently came back after long time in indian market and giving competition to royal enfield  ? ",option1:"ducati",option2:"yezdi",option3:"harley davidson",option4:"Indian", answer: 'yezdi' },
  { question: "Which automotive manufacturer is the owner of the motorcycle brand Ducati?", option1:"Volkswagen",option2:"Ferrari",option3:"Mercedes-Benz",option4:"volvo",answer: 'Volkswagen' },
  { question: "Which of the following is a British motorcycle brand?",option1:"indian",option2:"triumph",option3:"royal enfield",option4:"harley davidson", answer: 'triumph' },
];

for (let x of questionaire) {
 
  ans = input.question("\nquesion is : " + x.question
                       +"\n1) - "+x.option1
                       +"\n2) - "+x.option2
                       +"\n3) - "+x.option3
                       +"\n4) - "+x.option4+"\nans : ");
  
  if (ans === x.answer) {
    ++score;
  }

}

console.log("your score is : " + score);