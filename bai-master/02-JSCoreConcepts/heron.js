// boki trójkąta
a = 3;
b = 4;
c = 5;
h = 7; 

formula = (a + b + c) / 2; // p - polowa obwodu trojkata potrzebna do obliczenia

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .
calculation =  formula * ( formula - a ) * ( formula - b ) * ( formula - c );
let sth = (a , b , c) =>  { return Math.sqrt(calculation) };

console.log( "Pole trójkąta o bokach " + a + "," + b + "," + c + " wynosi: "+ sth(a , b , c) );