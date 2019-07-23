class Human {
    public name: string;
    public age: number;
    public isProgrammer: boolean;
    private location: string;

    constructor(name: string, age: number, isProgrammer: boolean, location?: string) {
        this.name = name;
        this.age = age;
        this.isProgrammer = isProgrammer;
        this.location = location;
    }

    home() {
        console.log(this.location);
    }
}

const jimmy = new Human('Jimmy', 16, false);
const smith = new Human('Smith', 22, true, 'NY');

jimmy.home(); // undefined
smith.home();
// smith.location; // compilation failed

const hello = (person: Human): string => {
    return `Hello, ${person.name}! You are ${person.age} years old and ${
        person.isProgrammer ? 'a programmer!' : 'not a programmer!'
    }`;
};

console.log(hello(smith));

export {};
