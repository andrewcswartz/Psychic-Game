// Set default score, guess values, and other variavle


// Alphabet array


var won = 0;
var lost = 0;
var attempts = 13;
var usedArray = [];
var randomLetter = randomLetter;

// var  = alphabet[Math.floor(Math.random() * alphabet.length)];
var letters= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// var letters = [a,b,c,d]


randomLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(randomLetter);


function CompGuess() {
      randomLetter = letters[Math.floor(Math.random() * letters.length)];
      console.log(randomLetter);
}


document.onkeyup = function (event) {
      var playerGuess = event.key;

     
      if (playerGuess === randomLetter) {
            won++;
            attempts = 10;
            usedArray = [];
      }

      
      CompGuess();
      if (playerGuess !== randomLetter) {
            attempts--;
      }

      
      if (attempts == 0) {
            lost++;
            usedArray = []
            attempts = 10;
      }

      
      if (usedArray.indexOf(playerGuess) >= 0) {

      } else 
      {
            usedArray.push(playerGuess);
            document.getElementById("playerGuess").innerHTML = usedArray;
            console.log(usedArray);
      }
      
      document.getElementById("wins").innerHTML = won;
     


      document.getElementById("losses").innerHTML = lost;
      document.getElementById("attempts").innerHTML = attempts;
}
