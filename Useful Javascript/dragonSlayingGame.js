var slaying = true;
var youHit = Math.floor(Math.random() * 2)
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;

while (slaying) {
    
    if (youHit === true) {
        
        console.log("You hit the dragon, ya basterd");
        totalDamage += damageThisRound;
        
        if (totalDamage >= 4) {
            console.log("You slew the dragon ya dick");
            slaying = false;
        } else {youHit =  Math.floor(Math.random() * 2)}
    } else{
        console.log("You missed ya basterd");
    }
    slaying = false;
}

