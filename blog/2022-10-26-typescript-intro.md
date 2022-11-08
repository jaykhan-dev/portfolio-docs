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

#### Type: `unknown`

#### Type: `never`

#### Type: `undefined` & `null`

### Arrays

### Tuples

### Object Types

### Enums

### Aliases & Interfaces

### Union Types

### Functions

### Casting

### Classes

### Basic Generics

### Utility Types

### Keyof

### Null

### Definitely Typed
