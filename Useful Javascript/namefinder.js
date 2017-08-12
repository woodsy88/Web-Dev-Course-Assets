/*jshint multistr:true */

var text = "hey there farts, andrew stop smelling so bad and do some \ work";

var myName = "andrew";

var hits = [];

for (var i = 0; i < text.length; i += 1) {

        if (text[i] === 'a') {
        
        for ( var j = i; j < i + myName.length; j++) {
            
            if (text[j] === myName[j-i]) {
            
          hits.push(text[j]);  
            } 
            
            
        }
        } 
};

if (hits.legnth === 0) {

console.log("Your name wasn't found!");
} else {

console.log(hits);
};