names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        this.names = names; // kontekst wywołania
    }

    /*startWith(letter){
        let namesInOrder = [ ];
        while(i<namesInOrder){

        }
        this.names = namesInOrder; 
        return this;// names (array) which starts with the letter
    }
*/ //I don't know how to do this
    sort() {
        this.names.sort();
        return this;// names (array) in alphabetical order 
    }

    get() {
        return this.names; // names (array) in natural order
    }

    getFirst(n) {
        return this.names.slice(0, n);// get first 'n' names (array) 
    }
}

students = new Students(names);
console.log(students.get());
console.log(students.sort());
console.log(students.startWith('P'));
console.log(students.startWith('M').sort());
console.log(students.sort().getFirst(4));
console.log(students.startWith('M').sort().getFirst(2));
console.log(students.get());



