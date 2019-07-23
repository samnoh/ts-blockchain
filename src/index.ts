const name = 'Smith';
const age = 22;
const isProgrammer = false;

const hello = (name: string, age: number, isProgrammer: boolean): string => {
    return `Hello, ${name}! You are ${age} years old and ${
        isProgrammer ? 'a programmer!' : 'not a programmer!'
    }`;
};

console.log(hello(name, age, isProgrammer));

export {};
