const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = [];

rl.question ("What's your name? Nicknames are also acceptable :)", (answer) => {
  answers.push(answer);

  rl.question ("What's an activity you like doing?", (answer) => {
    answers.push(answer);

    rl.question ("What do you listen to while doing that?", (answer) => {
      answers.push(answer);

      rl.question ("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
        answers.push(answer);

        rl.question ("What's your favourite thing to eat for that meal?", (answer) => {
          answers.push(answer);

          rl.question ("Which sport is your absolute favourite?", (answer) => {
            answers.push(answer);

            rl.question ("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
              answers.push(answer);
            })
          })
        })
      })
    })
  })
})



// rl.question('What do you think of Node.js? ', (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });



// Devani loves listening to Ludovico Einaudi while coding, devouring Yak Momos for brunch, prefers Tennis over any other sport, and is amazing at dropping mad puns at inopportune times.



