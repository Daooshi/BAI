//deklaracja tablicy
var newArray = new Array(10);

var randomNumber = () => (Math.floor(Math.random()*20+5)); // wylosowanie numeru z danego zakresu

//utworzenie tablicy i umieszczenie elementów oraz ich wypisanie
for(i = 0; i < 10; i++){
    newArray[i] = randomNumber();
    console.log(newArray[i]);
}