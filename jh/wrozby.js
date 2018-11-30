var alfabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","W","Z"];
var wrozby = [];

function slob(){
    for(var i=0; i<alfabet.length;i++){
        wrozby.push("W przyszłości weźmiesz ślub z osobą, której imie zaczyna się na literę " + alfabet[i] + "!");
    }
}

slob();

function zycie(){
    for(var i=0; i<alfabet.length;i++){
        wrozby.push("Będziesz żyć jeszcze " + (20+Math.floor(Math.random()*60)) + " lat!");
    }
}

zycie();

var lotek = [];
function lotto(){
    for(var i=0; i<alfabet.length;i++){
        wrozby.push("W najbliższym lotto masz " + i + "% szans na wygraną!");
    }
    wrozby.push("W najbliższym lotto masz " + "100" + "% szans na wygraną!");
    wrozby.push("W najbliższym lotto masz " + "90" + "% szans na wygraną!");
    wrozby.push("W najbliższym lotto masz " + "80" + "% szans na wygraną!");
    wrozby.push("W najbliższym lotto masz " + "-4000" + "% szans na wygraną!");
    wrozby.push("W najbliższym lotto masz " + "nie warto wychdzić z domu" + "% szans na wygraną!");
}

lotto();

function zarobek(){
    for(var i=0; i<40;i++){
        wrozby.push("W przyszłości będziesz zarabiać " + Math.floor(2000000 * (Math.random() + 0.1)) + " złoty miesięcznie!");
    }
    wrozby.push("W przyszłości będziesz zarabiać " + 2000000 + " złoty miesięcznie!");
    wrozby.push("W przyszłości będziesz zarabiać " + "0" + " złoty miesięcznie!");
    wrozby.push("W przyszłości będziesz zarabiać " + "mniej niż 0" + " złoty miesięcznie!");
    wrozby.push("W przyszłości będziesz zarabiać " + "błąd:LiczbaZaDużaNa64Bity" + " złoty miesięcznie!");
}

zarobek();

function cytaty(){
    var cytaty = ["Kluczem do sukcesu jest skoncentrowanie umysłu na tym, czego pragniemy, nie na tym, czego się boimy", "Najważniejszą rzeczą jest, aby cieszyć się swoim życiem - być szczęśliwym - tylko to się liczy.","Spróbuj nie opierać się zmianom, które napotykasz na swojej drodze. Skąd wiesz, że ta strona do której się przyzwyczaiłeś, jest lepsza od tej, która Cię czeka.","Nie odkrywa się nowych lądów bez zgody na to, że na długi czas straci się oczu brzeg.","Cele są osiągane przez dyskomfort i ciężką pracę. Nie osiąga się ich, ukrywając się w przytulnym miejscu.","Życie zaczyna się tam gdzie kończy się lęk.","Jeśli chcesz mieć coś, czego nie masz, musisz zacząć robić rzeczy, których nie robisz.","Z uśmiechem na twarzy człowiek podwaja swoje możliwości.","Prawdziwy błąd to taki, z którego nie wyciągamy żadnych wniosków.","Życia nie mierzy się ilością oddechów, ale ilością chwil, które zapierają dech w piersiach.","Jeśli kiedykolwiek zamierzasz cieszyć się życiem - teraz jest na to czas - nie jutro, nie za rok. Dzisiaj powinno być zawsze najwspanialszym dniem.","Nie wolno lękać się niczego i uważać za zakazane czegokolwiek, czego pragnie w nas nasza dusza.","Czerp z innych, ale nie kopiuj ich. Bądź SOBĄ.","Jeśli możesz sobie coś wymarzyć, możesz też to zrobić.","Wszystko jest możliwe. Niemożliwe wymaga po prostu więcej czasu.","Klasa 3TC jest najlepsza, staraj się być jak oni!","Nigdy nie zapomnij najpiękniejszych dni swojego życia! Wracaj do nich, ilekroć w twoim życiu wszystko zaczyna się walić.","Jedyną drogą do tworzenia wielkich rzeczy, jest kochanie tego, co się robi."];
    for(var i=0; i<cytaty.length;i++){
        wrozby.push("Porada życiowa na dziś: " +cytaty[i]);
    }
}

cytaty();

function dajLosowaWrozba(){
    var index = Math.floor(Math.random()*(wrozby.length-1));
    return wrozby[index];
}








var podstawowyDiv = "<div class=wrozba";



function relad(){
    location.reload();
}

function losuj(){


    for(var i=0;i<wrozby.length;i++)
    {
        var r = (Math.random() *350);
        document.getElementById("result").innerHTML += podstawowyDiv + " style='background-color:hsl(" +r+",100%,80%)'>" + dajLosowaWrozba() + "</div>";
    }

    var x = 10000;
    document.getElementById("result").style.left= -x+"px";
        
    //}
    
    /*setInterval(function(){
        if(x>0){
        document.getElementById("result").style.left += x;
        x = Math.abs(x - 1);
        }
    },16);*/
    
   
}

