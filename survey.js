

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {

  rl.question('What\'s an activity you like doing? ', () => {

    rl.question('What do you listen to while doing that? ', () => {
        
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', () => {
        
        rl.question('What\'s your favourite thing to eat for that meal? ', () => {
        
          rl.question('Which sport is your absolute favourite? ', () => {
        
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', () => {
        
              console.log(`Thank you for your valuable feedback: ${answer}`);
              rl.close();
        
            });
        
          });
        
        });
        
      });
        
    });
        
  });

});
