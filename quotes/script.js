var tab = ["Today it's up to you to create the peacefulness you long for",
"A friend asks only for your time not your money",
"If you refuse to accept anything but the best, you very often get it",
"A smile is your passport into the hearts of others.",
"A good way to keep healthy is to eat more Chinese food.",
"Your high-minded principles spell success.",
"Hard work pays off in the future, laziness pays off now.",
"Change can hurt, but it leads a path to something better.",
"Enjoy the good luck a companion brings you.",
"People are naturally attracted to you."]

function losuj(){
    let index = Math.floor(Math.random() * tab.length);

    let odp = tab[index];
    console.log(odp);
    document.getElementById("txt").innerHTML = "<center>"+odp+"</center>";
}
