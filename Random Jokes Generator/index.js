document.getElementById('pid').innerHTML="Clever jokes for the smarty-pants in the room";

var jokes=['What do you get when you cross a joke with a rhetorical question?','A pun, a play on words, and a limerick walk into a bar.','Oh, man! A hyperbole totally ripped into this bar and destroyed everything','This sentence contains exactly threee erors.','Knock, knock.','World’s scientists admit they just don’t like mice','Eminem terrified as daughter begins dating man raised on his music','40,000 pounds of salsa spill on I-10 near Cabazon, California. CHiPs respond.','ime travel. Quantum experiment provest'];
function jokegenerate(){
    var randomNumber=Math.floor(Math.random()*(8));
        document.getElementById('pid').innerHTML=jokes[randomNumber];
    }