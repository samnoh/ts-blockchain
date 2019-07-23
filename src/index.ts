interface Human {
    name: string;
    age: number;
    isProgrammer: boolean;
}

const person = {
    name: 'Smith',
    age: 22,
    isProgrammer: true
};

const hello = (person: Human): string => {
    return `Hello, ${person.name}! You are ${person.age} years old and ${
        person.isProgrammer ? 'a programmer!' : 'not a programmer!'
    }`;
};

console.log(hello(person));

export {};
