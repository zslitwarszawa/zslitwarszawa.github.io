var czesciCiala = ["Twarz", "Noga", "Ręka", "Stopa", "Pupa"];
var przymiotniki = ["Cuchnaca", "Brudna", "Głupia", "Straszliwa"];
var slowa = ["Małpa", "Glisda", "Mucha", "Kuna", "Norka", "Flądra"];
var wrozba=  ["Today it's up to you to create the peacefulness you long for.", "A friend asks only for your time not your money.", "If you refuse to accept anything but the best, you very often get it.", "A smile is your passport into the hearts of others.", "A good way to keep healthy is to eat more Chinese food.", 
"Your high-minded principles spell success.", "Hard work pays off in the future, laziness pays off now.",
"Change can hurt, but it leads a path to something better.", "Enjoy the good luck a companion brings you.",
"People are naturally attracted to you.",
"Hidden in a valley beside an open stream- This will be the type of place where you will find your dream.",
"A chance meeting opens new doors to success and friendship.", "You learn from your mistakes... You will learn a lot today.",
"If you have something good in your life, don't let it go!",
"What ever you're goal is in life, embrace it visualize it, and for it will be yours.",
"Your shoes will make you happy today.","You cannot love life until you live the life you love.",
"The man or woman you desire feels the same about you.", "Meeting adversity well is the source of your strength.",
"A dream you have will come true.", "Our deeds determine us, as much as we determine our deeds.",
"Never give up. You're not a failure if you don't give up.", "You can make your own happiness.",
"Jeśli 3 razy kucniesz i 5 razy obrócisz się dookoła - twoja miłość będzie spełniona.",
"Przed spożyciem ciasteczka skonsultuj się z lekarzem lub farmaceutą.", "Co masz zrobić dziś zrób dziś.",
"Jak kocha to poczeka…<3", "Wrzuć na luz!", "Dzisiaj jest twój dobry dzień.", "Zasady są po to by je łamać",
"Jak kocha to poczeka…", "Uwielbiasz chińszczyznę.", "Wszechświat wybrał cię na międzygalaktycznego wodzireja.", "Wkrótce skontaktuje się z tobą kosmita.", "Konfucjusz mówi, że masz serce wielkie jak Pałac Kultury.", "Wprowadź więcej danych.", "A dream you have will come true.", "Our deeds determine us, as much as we determine our deeds.", "Never give up. You're not a failure if you don't give up.", "You can make your own happiness.", "Jeśli 3 razy kucniesz i 5 razy obrócisz się dookoła - twoja miłość będzie spełniona.", "Przed spożyciem ciasteczka skonsultuj się z lekarzem lub farmaceutą.", "Co masz zrobić dziś zrób dziś.", "Jak kocha to poczeka…<3", "Wrzuć na luz!", "Dzisiaj jest twój dobry dzień.", "Zasady są po to by je łamać", "Jak kocha to poczeka…", "Uwielbiasz chińszczyznę.", "Wszechświat wybrał cię na międzygalaktycznego wodzireja.", "Wkrótce skontaktuje się z tobą kosmita.", "Konfucjusz mówi, że masz serce wielkie jak Pałac Kultury.", "Wprowadź więcej danych.", "Now is the time to try something new.", "A very attractive person has a message for you.", "Wkrótce zostaniesz Dyrektorem na Wiśniowej 56", "Dostałeś bilet do samolotu, który stoi pod szkołą, lot dziś o 20. Zgłoś ię do dyrekcji" ]

function LosowaObelga(){

	var w= wrozba[Math.floor(Math.random()*wrozba.length)];
	
	var obelga = w;
	//var obelga = "Twoja".contact(a,"jest jak",b,c,"!");		miało być coś z contactem ale 
	//var obelga = "Twoja "+a+" jest jak "+b.contact(c)+"!";	ani to nie dziala ani ładne nie jest
	console.log(obelga);
	document.getElementById("obelga").innerHTML = obelga;
}


