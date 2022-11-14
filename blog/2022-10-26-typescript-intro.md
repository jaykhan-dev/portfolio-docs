---
title: Typescript Intro
slug: typsescript-intro
tags: [typescript, javascript, superset]
authors: jay
---

![Typescript Intro Header](./img/typescript-intro/ts-wallpaper-mountains.png)

[Typscript](https://www.typescriptlang.org/) was created at Microsoft in 2012. It is a superset of JavaScript meaning that any existing JavaScript code is still valid Typescript. The main difference is in **types**. Static type checking is important because it can catch errors earlier when developing.

<!-- truncate -->

JavaScript being a loosely typed language means that it can be difficult to determine what type of data is being used and what can be expected.

:::info
Typescript uses compile time type checking (before running the code).
:::

:::info
ES2015 is supported by most modern browsers which means you can specify it as a target when downleveling (converting code to older versions)
:::

### Typescript Compiler

In order to use Typescript, you must first install it into your `node` app.

```bash
npm i typescript --save-dev
```

Run it by:

```bash
npx tsc
```

Create a `tsconfig.json` file with the following command

```bash
npx tsc --init
```

It is important to note that the compilier will evaluate the typescript code and output a JavaScript version that the browser will understand. Include these snippets to take the Typescript code in the `src` folder and and transpile them into the `build` folder.

If you are using React or Vue, you can initialize a project using `vite` and select Typescript when the option appears

```bash
npm init vite@latest
```

### Strictness

By adding strictness to a codebase, it enables strong type checking or loose depending on your preference. Using `"strict": true` in the `tsconfig.json` file will toggle all type-checking strictness flags but it's also possible to use certain ones. The two most important are:

1. `noImplicitAny`
   This will flag issues on any variables which have the `any` type. The section "Special Types" will go into more detail.

2. `strictNullChecks`
   This flag makes handling `null` and `undefined` more explicit. This is important because forgetting to handle these can save a lot of time and money!

### Simple Types

There are three main primitives in both JavaScript and Typescript.

1. `boolean` - true/false
2. `number` - whole numbers, integers, floats
3. `string` - text values enclosed in `''` or `""`

When defining a variable you can use two methods:

- Explicit
- Implict

:::tip
I've learnt that explicit is usually better than implicit because if you were to pass off a project to another developer, they would have a much easier time understanding the code if the types are explicit
:::

#### Explicit type

As you can see, the explicit nature of this variable makes it straightforward and easy to read.

```ts
let myName: string = "Jay";
```

Another example:

```ts
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}`);
}
```

:::tip
it's best not to add annotations when the type system would end up inferring
the same type anyway.
:::

:::info
Type annotations never change the runtime behaviour of your program
:::

#### Implicit type

In this example, Typescript will "guess" (`infer`) what the type is, which is `string`.

```ts
let myName = "Jay";
```

To see Typescript in action, lets try to reassign the value of `myname` from a `string` to a `number`.

```ts
myName = 33;
```

If you are using VS Code or a similar code editor, you will see a red underline and the following text: `attempts to re-assign the value to a different type`

This is in stark contrast to JavaScript which won't throw an error at all.

:::tip
use lower case values for primities like `boolean` instead of `Boolean`.  
:::

### Special Types

#### Type: `any`

The `any` type disables type checking and allows for any type to be used.

:::tip
Since Typescript won't be able to use type checking, it is not recommended to use `any`. It is mainly if you deliberately want to bypass type safety.
:::

```ts
let v: any = true;
v = "string"; // no error
Math.round(v); // no error
```

#### Type: `unknown`

`unknown` is similar to `any` but it is a safer alternative. Typescript will prevent `unknown` types to be used.

```ts
let value: unknown;

value = true; //OK
value = 42; //ok
value = "Hello World"; //ok
value = []; //ok
value = {}; //ok
value = Math.random; //ok
value = null; //ok
value = undefined; //ok
value = new TypeError(); //ok
value = Symbol("type"); //ok
```

As you can see, all values are considered type-correct.

However, trying to assign a variable of type `unknown` to other variables of other types will not work as the code snippet below indicates:

```ts
let value: unknown;

let value1: unknown = value; //ok
let value2: any = value; //ok
let value3: boolean = value; //Error
let value4: number = value; //Error
let value5: string = value; //Error
let value6: object = value; //Error
let value7: any[] = value; //Error
let value8: Function = value; //Error
```

Notice how the only values which can be assigned are the `any` and `unknown`.

Typescript won't let us perform arbitrary operations on values of type `unknown`. We must perfom some sort of type checking first to narrow the type of value we're working with.

```ts
let value: unknown;

value.foo.bar; // Error
value.trim(); // Error
value(); //Error
new value(); // Error
value[0][1]; // Error
```

:::tip
Use `unknown` if you don't know what type of data is being used.
:::

#### Type: `never`

```ts
let x: never = true;
```

#### Type: `undefined` & `null`

`undefined` and `null` refer to the JavaScript primitives of the same name. These don't have much use unless you add `strictNullChecks` in the `tsconfig.json` file.

```ts
let y: undefined = undefined;
let z: null = null;
```

### Arrays

```ts
const instruments: string[] = [];
instruments.push("Moog synth"); // OK
instruments.push(3); // Error
```

#### Readonly

`readonly` will prevent any changes from being made to the array.

```ts
const names: readonly string[] = ["Jay"];
names.push("Khan"); // Error
```

#### Type inference

Typescript can infer what type of array it is based on its values.

```ts
const numbers = [1, 2, 3];
numbers.push(4); // OK
numbers.push("5"); // Error
let head: number = numbers[0]; // OK
```

### Tuples

### Object Types

### Enums

### Aliases & Interfaces

It is possible to define types separately from variables. This allows types to be shared between different objects/variables.

#### Aliases

An alias allow defining types with a custom name.

Consider this example:

```ts
type CompYear = number;
type CompType = string;
type CompModel = string;
type Comp = {
  year: CompYear;
  type: CompType;
  model: CompModel;
};

const compYear: CompYear = 2020;
const compType: CompType = "Mac Mini";
const compModel: CompModel = "Apple M1";
const comp: Comp = {
  year: compYear,
  type: compType,
  model: compModel,
};

console.log(comp);
```

#### Interface

Similar to aliases but only for `object` types.

```ts
interface Reactangle {
  height: number;
  width: number;
}

const rect: Rectangle = {
  height: 20,
  width: 10,
};

console.log(rect);
```

#### Extending an interface

:::tip
**Extending** means creating a new interface with the same properties but with additional or new attributes.
:::

```ts
interface Rect {
  height: number;
  widht: number;
}

interface ColouredRect extends Rect {
  colour: string;
}

const rectangle: ColouredRect = {
  height: 20,
  width: 10,
  colour: "blue",
};

console.log(rectangle);
```

### Union Types

### Functions

### Casting

### Classes

### Basic Generics

### Utility Types

### Keyof

### Null

### Definitely Typed
