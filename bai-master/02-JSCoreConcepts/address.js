title = "dr";
name = "Mateusz";
surname = 'Kubicki';
street = 'Długa 15';
city = 'Kraków';
zip = '30-781';
country = 'Poland';

// bez formatowania
console.log(title);
console.log(name);
console.log(surname);
console.log(street);
console.log(zip);
console.log(city);
console.log(country);

// z formatowaniem

console.log("\n" + title + " " + name + " " + surname + "\n" + "ul. " + street  + "\n" + zip + " " + city + "\n" + country.toUpperCase())


/* 
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/
