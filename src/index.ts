const name = 'Smith';
const age = 22;
const isProgrammer = true;

const hello = (name: string, age: number, isProgrammer: boolean) => {
    console.log(
        `Hello ${name}, you are ${age} years old and ${
            isProgrammer ? 'a programmer!' : 'not a programmer'
        }`
    );
};

hello(name, age, isProgrammer);

export {};
