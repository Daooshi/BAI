class Person{
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }

    // metoda do pobierania imienia i nazwiska
    loadName(){
        return this.name + " " + this.surname.toUpperCase();
    }
    
    // metoda do pobierania inicjałów
    loadInitials(){
        return this.name.charAt(0).toUpperCase() + ". " + this.surname.charAt(0).toUpperCase() + ". ";
    }
}

//tworzenie instacji
firstPerson = new Person ("Jan", "Nowak");
myPerson = new Person ("Dominik", "Woźniczka");

//wypisanie wyników
console.log(firstPerson.loadName());
console.log(firstPerson.loadInitials());
console.log(myPerson.loadName());
console.log(myPerson.loadInitials());