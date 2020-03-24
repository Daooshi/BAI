class Person{
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }

    loadName(){
        return this.name + " " + this.surname.toUpperCase();
    }
    
    loadInitials(){
        return this.name.charAt(0).toUpperCase() + ". " + this.surname.charAt(0).toUpperCase() + ". ";
    }
}

firstPerson = new Person ("Jan", "Nowak");
myPerson = new Person ("Dominik", "Woźniczka");

console.log(firstPerson.loadName());
console.log(firstPerson.loadInitials());
console.log(myPerson.loadName());
console.log(myPerson.loadInitials());