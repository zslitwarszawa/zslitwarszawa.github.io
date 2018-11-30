var czesciCiala = ["Twarz", "Noga", "Ręka", "Stopa", "Pupa"];
var przymiotniki = ["Cuchnaca", "Brudna", "Głupia", "Straszliwa"];
var slowa = ["Małpa", "Glisda", "Mucha", "Kuna", "Norka", "Flądra"];
var wrozba=  ["Dostałeś bilet do samolotu, który stoi pod szkołą, lot dziś o 20. Zgłoś ię do Dyrekcji", "A dream you have will come true.", "You can make your own happiness.",
"Jeśli 3 razy kucniesz i 5 razy obrócisz się dookoła - twoja miłość będzie spełniona.",
"Jak kocha to poczeka…<3","Wkrótce zostaniesz Dyrektorem na Wiśniowej 56", "Wrzuć na luz!", "Dzisiaj jest twój dobry dzień.", "Zasady są po to by je łamać", "Jak kocha to poczeka…", "Uwielbiasz hot-dogi w bufecie na Wiśniowej 56, zamówisz dzisiaj jednego!", "Ktoś na Ciebie czeka w bibliotece na Wiśniowej", "Wypożycz dzisiaj książkę w bibliotece na Wiśniowej, to dobry dzień na czytanie", "Wkrótce skontaktuje się z tobą kosmita.", "Konfucjusz mówi, że masz serce wielkie jak Pałac Kultury.", "Wprowadź więcej danych.", "A dream you have will come true.", "Zjesz dziś w szkole coś dobrego", "Zamów dziś obiad w bufecie, na pewno będzie Ci smakował", "Never give up. You're not a failure if you don't give up.","Wkrótce zostaniesz Dyrektorem na Wiśniowej 56","Dostałeś bilet do samolotu, który stoi pod szkołą, lot dziś o 20. Zgłoś ię do Dyrekcji", "You can make your own happiness.", "Jeśli 3 razy kucniesz i 5 razy obrócisz się dookoła - twoja miłość będzie spełniona.", "Przed spożyciem ciasteczka andrzejkowego skonsultuj się z lekarzem lub farmaceutą.", "Co masz zrobić dziś zrób dziś.", "Jak kocha to poczeka…<3", "Wrzuć na luz!", "Dzisiaj jest twój dobry dzień.", "Zasady są po to by je łamać", "Jak kocha to poczeka…",  "Wprowadź więcej danych.", "Now is the time to try something new.", "A very attractive person has a message for you.", "Wkrótce zostaniesz Dyrektorem na Wiśniowej 56", "Dostałeś bilet do samolotu, który stoi pod szkołą, lot dziś o 20. Zgłoś ię do Dyrekcji" ]

function LosowaObelga(){

	var w= wrozba[Math.floor(Math.random()*wrozba.length)];
	
	var obelga = w;
	//var obelga = "Twoja".contact(a,"jest jak",b,c,"!");		miało być coś z contactem ale 
	//var obelga = "Twoja "+a+" jest jak "+b.contact(c)+"!";	ani to nie dziala ani ładne nie jest
	console.log(obelga);
	document.getElementById("obelga").innerHTML = obelga;
}


