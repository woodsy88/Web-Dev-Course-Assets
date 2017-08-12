// quiz begins, no answers correct, will add up as user gets questions right


var correct = 0;

//ask questions
var answer1 = prompt('Name a programming language thats also a gem?');

if (answer1.toUpperCase() === 'RUBY') {
correct += 1;
} 

var answer2 = prompt('Whats the the best pet for a friend');
       if (answer2.toUpperCase() === 'DOG') {
                      correct += 1; // adds 1 point to correct variable 
                      }      
                      
                      
 var answer3 = prompt('Whats the biggest tree climbing animal?');
                     if (answer3.toUpperCase() === 'BEAR') {
                     correct += 1;
                     }
               
 var answer4 = prompt('Whats the most evil animal in the world?');
                     if (answer4.toUpperCase() === 'SNAKE') {
                     correct += 1; 
                     
                     }

 var answer5 = prompt('What is the epic animal my girlfriend is?');
                     if (answer5.toUpperCase() === 'TIGER') {
                     correct += 1;
                     }

//output
                     
 document.write("<p>You got " + correct + "out of 5 questions correct.</p>");
                     
                     if ( correct === 5) {
                     document .write("<p><strong>Your earned a gold crown biatch</strong></p>");
                     
                     } else if ( correct >= 3 ) {
                     
                     document.write("<p><strong>You earned a silver crown</strong></p>"); }
                     
                     else if (correct >= 1) {
                     
                     document.write("<p><strong> you suck bud</strong></p>");
                     }
                     else {
                     document.write("<p><strong> your reall dumb </strong></p>")
                     }
                   
                    