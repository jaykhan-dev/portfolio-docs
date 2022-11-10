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

```ts
let v: any = true;
v = "string"; // no error
Math.round(v); // no error
```

#### Type: `unknown`

#### Type: `never`

#### Type: `undefined` & `null`

### Arrays

```ts
const instruments: string[] = [];
instruments.push("Moog synth");
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
