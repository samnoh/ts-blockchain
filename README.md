# TypeScript Blockchian

## Install

```Bash
npm install -g typescript
```

```Bash
npm install --save-dev typescript tsc-watch
```

-   package.json

```json
"start": "tsc-watch --onSuccess \"node build/index.js\"",
"build": "tsc"
```

## TIL

### tsconfig.json

-   Typescript Compile Option

```json
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "ES2015",
        "sourceMap": false,
        "removeComments": true,
        "outDir": "./build"
    },
    "include": ["src/*"],
    "exclude": ["node_modules", "build"]
}
```

### Types

-   private, public, protected, readonly
-   `?`: optional

```TypeScript
class Book {
    private index: number;
    readonly name: string;
    public desc: string;

    constructor(index: number, name: string, desc?: string) {
        this.index = index;
        this.name = name;
    }
}
```

-   Array

```TypeScript
const numbers: number[] = [1, 2, 3];
```

-   Return type

```TypeScript
const print = (num: number): string => `${num}`;
```
