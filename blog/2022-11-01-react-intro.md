---
title: React Intro
slug: react-intro
tags: [javascript, react, tailwind, api, html, css, node, npm]
---

## What is React?

React JS is a JavaScript library for creating User Interfaces. It was created at Facebook and is very popular as most jobs for frontend development require knowledge of [React](https://reactjs.org).

This blog will briefly go through all the major and must know concepts for using React. Mastering the basics will give you a solid foundation on which to build well made user interfaces that a joy to use.

<!-- truncate -->

![Intro to React Header](./img/react-intro/header.png)

### Virtual DOM

React works by creating a virtual DOM in memory which is then manipulated. These changes in state are then rendered onto the page.

### CDN

If you wish to use the CDN links instead of creating a basic installation, use these. This blog however will focus on creating a full `react` app using the methods described below.

```html
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

### Installation

There are several ways to install React. The official way created by the React team is as follows:

```bash
npx create-react-app my-project
cd my-project
npm start
```

The script above will create a React project. In order to run it, you must first open the folder and then run the final command which will render the landing page.

There other way, which I prefer, is with [Vite](https://vitejs.dev) because it's faster and I see fewer errors when installing other packages like [Tailwind](https://tailwindcss.com/), [Three](https://threejs.org/), and [GSAP](https://greensock.com/gsap/)

```bash
npm init vite@latest
cd project-name
npm install
npm run dev
```

This will prompt a number of options which require a selection. What is neat about this is that you can choose either JavaScript or [Typescript](https://www.typescriptlang.org/).

### `index.js`

The following code is a required for a basic setup. We import `React` and `ReactDOM` and create a `root` so that we can display our components, in this case `<App />`.

```jsx
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello World!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

:::info
using `createRoot` is the preferred method of rendering JSX onto a webpage.
The root node does NOT have to be a `div` element and it does NOT have to have the `id='root'`:
:::

### JSX

JSX stands for JavaScript XML. This allows you to write HTML **in** JavaScript which is why having a good foundation in programming is essential to using React.

#### Example with JSX

```jsx
const newVar = <h1>This is HTML in JS</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(newVar);
```

#### Example without JSX

```jsx
const withoutJSX = React.createElement("h1", {}, "No JSX!");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(withoutJSX);
```

:::info
`class` is a [reserved](https://www.w3schools.com/js/js_reserved.asp) word in JavaScript so `className` is used instead.
:::

### Components

Components are the building blocks of a react app. They are reusable chuncks of code that perform specific functions and output the results.

:::tip
components MUST start with an upper case letter
:::

#### Class Component

```jsx
class Car extends React.Component {
  render() {
    return <h2>Hi, I am a car!</h2>;
  }
}
```

:::info
It is now suggested to use Function components along with Hooks, which were added in React 16.8.
:::

#### Function Component

```jsx
function Car() {
  return <h2>Hi I am a car</h2>;
}
```

### Props

Props are arguments that are passed into React components.

Example as a variable

```jsx
const propVar = <Car brand="Lexus" />;
```

Example with a functional component

```jsx
function Car(props) {
  return <h2>I am a {props.brand}!</h2>;
}
```

### Events

Events refer to user interactions on the page. In terms of syntax they have the following characteristics:

- camelCase
- Event handlers are written inside curly braces

`onClick={loose}`

```jsx
<button onClick={loose}>Knock! Draw! Loose!</button>
```

```jsx
function Arrow() {
  const fire = () => {
    alert("Well Done!");
  };

  return <button onClick={fire}>Loose!</button>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Arrow />);
```

#### Passing Arguments

```jsx
function Arrow() {
  const loose = (a) => {
    alert(a);
  };

  return <button onClick={() => loose("Knock! Draw! Loose!")}>Fire!</button>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Arrow />);
```

#### Example 2

In the following example, we are passing two arguments, `a`, `b`, into the arrow function called `shoot`. It will alert us as to what type of event triggered this alert message. We then use another arrow function in the `<button>` and pass `event` as an argument so that we get a result that tells us the type of event. And that is what happens if you click the button

```jsx
function Football() {
  const shoot = (a, b) => {
    alert(b.type);
  };

  return (
    <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Football />);
```

### Conditionals

Being able to render components based on conditions is easily achieved. There are several ways to do this. We will explore the `if` statement, the logical `&&` operator, and the ternary operator.

1. `if`

```jsx
function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>GOAL!</h1>;
}

function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal />;
  }
  return <MissedGoal />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Goal isGoal={false} />);
```

2. `&&`

```jsx
function Garage(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 && <h2>You have {cars.length} cars in your garage.</h2>}
    </>
  );
}

const cars = ["Cadillac", "Lexus"];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Garage cars={cars} />);
```

3. Ternary operator

```jsx
function MadeGoal() {
  return <h1>GOAL!</h1>;
}

function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function Goal(props) {
  const isGoal = props.isGoal;
  return <>{isGoal ? <MadeGoal /> : <MissedGoal />}</>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Goal isGoal={false} />);
```

### Lists

In order to render a list, the preferred method in React is to use the `map()` array method.

For example the following code maps the items in the `car` array onto a new array using the `map()` array method which displays it on the page. Note that without a key, `react` will throw an erro.

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'

function Car(props) {
  return <li>I am a {props.brand}</l1>
}

function Garage() {
  const cars = [
    {id: 1, brand: 'Cadillac'},
    {id: 2, brand: 'Lexus'}
  ]
  return (
    <>
      <h1>Cars in the garage</h1>
      <ul>
        {cars.map((car) => <Car key={car.id} brand={car} />)}
      </ul>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Garage />)
```

### Forms

Modern apps will require some kind of input from the user. This is where forms come in. In order to use forms, we need to use the `useState` hook to get an initial state and then use a `handleChange` arrow function to show changes to the state.

#### Select

```jsx
import { useState } from 'react'
import ReactDOM from 'react-dom/client'

function MyForm() {
  const [myCar, setMyCar] = useState("Volvo")

  const handleChange = (event) => {
    setMyCar(event.target.value)
  }

  return (
    <form>
      <select value={myCar} onChange={}>
        <option value="Form">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyForm />)
```

### Router

#### Install the router

```bash
npm i -D react-router-dom
```

In order to use the router, it is important to structure the app as the following:

`src\pages\:`

- `Layout.js`
- `Home.js`
- `Blogs.js`
- `Contact.js`

`index.js`

```jsx
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

`Layout.js`

```jsx title="/src/components/Layout.js"
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
```

`Home.js`

```jsx
const Home = () => {
  return (
    <section>
      <div>
        <h1>Home</h1>
      </div>
    </section>
  );
};

export default Home;
```

### Memo

Using Memo can enhance performance by not rendering a component whose props have not changed.

We need a separate file called `Todos.js` where our Memo logic will live. Consider this ToDo example:

```jsx
import { useState } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState("todo 1", "todo 2");

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

`Todos.js`

```jsx
import { memo } from "react"

const Todos = ({"child render"})
return (
  <>
    <h2>My Todos</h2>
    {todos.map((todo, index) => {
      return <p key={index}>{todo}</p>
    })}
  </>
)

export default memo(Todos)
```

### Hooks

Hooks were introduced to React in 16.8. They allow you to access state and other features in function components. For this reason, class components are generally not used much anymore.

There are 3 rules for hooks:

- Hooks can only be called inside React function components.
- Hooks can only be called at the top level of a component.
- Hooks cannot be conditional

#### useState

`useState` is used to track state in a function component. What this means is, when we want to add data to an application, it must first be setup with a state so that React can track any changes made to it. The logic is determined by the kind of data and its purpose.

The first thing to do is to import it. This is essentially destructuring the `useState` hook from `react`.

```jsx
import { useState } from "react";
```

```jsx
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h2>I've rendered {count} times!</h2>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Timer />);
```

#### useEffect

The `useEffect` hook allows you to fetch data, update the dom, animate elements and so on.

Basic syntax:
`useEffect(<function>, <dependency>)`

#### Custom Hook

The following code is a condensed way of fetching data from an API. It uses the built in `fetch` function which converts the raw JSON and applies it to `setData` state. Finally it returns the data so that it can be used in another component where we only need to supply a URL.

```jsx title="/src/components/useFetch.js"
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useFetch;
```

By importing the component above into our `index.js` we can then use it to fetch data from any URL.

```jsx title="/src/index.js"
import ReactDOM from "react-dom/client";
import useFetch from "./component/useFetch";

const Home = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Home />);
```

### React ES6

#### Variables

There are three ways of defining a variable in ES6, `var`, `let`, `const`

`var`

```js
var x = 10;
```

:::tip
`var` has a **function** scope, not a **block** scope
:::

- If you use `var` outside of a function, it belongs to the global scope.

- If you use `var` inside of a function, it belongs to that function.

- If you use `var` inside of a block, i.e. a for loop, the variable is still available outside of that block.

`let` is limited to the block or expression where it is defined.

```js
let y = 2;
```

:::tip
`let` has a **block** scope
:::

`const` is a variable that once it's defined, its value can never change

```js
const z = 1206;
```

| CAN                                      | CANNOT                     |
| ---------------------------------------- | -------------------------- |
| Change the elements of constant array    | Reassign a constant value  |
| Change the properties of constant object | Reassign a constant array  |
|                                          | Reassign a constant object |

#### Arrow functions

Arrow functions are a shorter way of writing functions.

Before:

```js
hello = function () {
  return "Hello World!";
};
```

After:

```js
hello = () => {
  return "Hello World!";
};
```

Even shorter:

```js
hellp = () => "Hello World!";
```

:::info
this only works of the function has only one statement
:::

#### Destructuring

Destructuring makes it easy to extract only what is needed from an array or object.

Destructuring an array that returns an array. This is quite common in React.

```js
function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);
```

Destructuring an object that is deeply nested

```js
const vehicleOne = {
  brand: "Ford",
  model: "Mustang",
  type: "car",
  year: 2021,
  color: "red",
  registration: {
    city: "Houston",
    state: "Texas",
    country: "USA",
  },
};

myVehicle(vehicleOne);

function myVehicle({ model, registration: { state } }) {
  const message = "My " + model + " is registered in " + state + ".";
}
```

#### Spread Operator

the `...` operator allows you to copy all or part of an existing array/object into another array/object.

Simple example:

```js
const arrayOne = [1, 2, 3];
const arrayTwo = [4, 5, 6];
const arrayCombined = [...arrayOne, ...arrayTwo];
console.log(arrayCombined);
```

#### Array mapping

One of the most useful array methods is the `.map()` method. It can be used to generate lists in React and it allows you to run a function on each item in the array, returning a new one as the result.

```jsx
import React from "react";
import ReactDOM from "react-dom/client";

const myArray = ["apple", "banana", "orange"];
const myList = myArray.map((item) => <p>{item}</p>);

ReactDOM.render(myList, document.getElementbyId("root"));
```

#### Ternary Operator

A simplified version of an `if`/`else` statement. Ternary operators make the code more concise.

Syntax: `condition ?<expression if true> : <expression if false>`

Before:

```js
if (autheticated) {
  renderApp();
} else {
  renderLogin();
}
```

With:

```js
authentication ? renderApp() : renderLogin();
```

#### `this` keyword

In Javascript `this` refers to an object.

| Overview                                                               |
| ---------------------------------------------------------------------- |
| In an object method, this refers to the object.                        |
| Alone, this refers to the global object.                               |
| In a function, this refers to the global object.                       |
| In a function, in strict mode, this is undefined.                      |
| In an event, this refers to the element that received the event.       |
| Methods like call(), apply(), and bind() can refer this to any object. |

#### Modules

### Tailwind CSS

The following code will install Tailwind into your React app

```bash
npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

```js title="tailwind.config.js"
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // highlight-start
    "./src/**/*.{js,jsx,ts,tsx}",
    //highlight-end
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

```css title="src/index.css"
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```bash
npm run dev
```

### GSAP

```jsx
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Loader = () => {
  const blue = useRef(null);
  const red = useRef(null);
  const yellow = useRef(null);
  const green = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [blue.current, yellow.current],
      0.5,
      { y: 12 },
      { y: -12, yoyo: true, repeat: -1 }
    );
    gsap.fromTo(
      [red.current, green.current],
      0.5,
      { y: -12 },
      { y: 12, yoyo: true, repeat: -1 }
    );
  }, []);

  return (
    <svg viewBox="0 0 150 33.2" width="180" height="150">
      <circle ref={blue} cx="16.1" cy="16.6" r="16.1" fill="#527abd" />
      <circle ref={red} cx="55.2" cy="16.6" r="16.1" fill="#de4431" />
      <circle ref={yellow} cx="94.3" cy="16.6" r="16.1" fill="#f4b61a" />
      <circle ref={green} cx="133.4" cy="16.6" r="16.1" fill="#009e52" />
    </svg>
  );
};

export default Loader;
```

### Three JS

```jsx
/* eslint-disable space-before-function-paren */
/* eslint-disable lines-between-class-members */
import React, { Component } from "react";
import * as THREE from "three";
class ThreeScene extends Component {
  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    // ADD SCENE
    this.scene = new THREE.Scene();
    // ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 4;
    // ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor("#000000");
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);
    // ADD CUBE
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: "#433F81" });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);
    this.start();
  }
  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }
  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };
  stop = () => {
    cancelAnimationFrame(this.frameId);
  };
  animate = () => {
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };
  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  };
  render() {
    return (
      <div
        style={{ width: "400px", height: "400px" }}
        ref={(mount) => {
          this.mount = mount;
        }}
      />
    );
  }
}
export default ThreeScene;
```

### ESLint and Prettier

Linting and formatting code is important to weed out any bugs beforehand that may arise from writing the wrong code.

### Netlify script

```toml
# The following redirect is intended for use with most SPA's that handles routing internally.
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Lottie Files

```bash
npm i lottie-react
```

Save a JSON version of your Lottie file in `/src/assets` and load it into a component like this:

```jsx
import Lottie from "lottie-react";
import groovyWalkAnim from "../assets/groovyWalk.json";

const LottieAnim = () => {
  return <Lottie animationData={groovyWalkAnim} />;
};

export default LottieAnim;
```

### Mock API

### Testing

### Accessibility