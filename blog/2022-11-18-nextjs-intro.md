---
title: Next JS
slug: next
tags:
  [
    next-js,
    react,
    javascript,
    typescript,
    front-end,
    web,
    html,
    css,
    framework,
    ssr,
    ssg,
    user-interface,
  ]
---

![Next header](../blog/img/next-intro/next-blog.png)

## Next JS

[Next JS](https://nextjs.org) is a React framework that optimizes and structures your app for a better developer and user experience. A basic `react` app provides a foundational toolset to build user interfaces but it still requires quite a bit of setup to make it production ready, meaning scalability, SEO optimization, accessibility, performance and so on.

<!-- truncate -->

### Fundamentals

#### Compiling

Compiling is the process of taking code in one language and outputting it in another language or a different version of the same language. This happens during the development stage (while editing code) and also at the build step prior to the production stage.

A browser needs code to be compiled in order to understand it.

#### Minifying

Developers write code so that they are able to understand it. However, this formatting is not necessary for the browser to run it. Elements such as comments, spaces, indents and multiple lines are removed and minified code looks like a giant blob of text. The functionality still remains but the file sizes are smaller which means better app performance.

#### Bundling

Bundling resolves the web of dependencies that usually accompany a typical application with its many modules, functions, components, 3rd party packages and so on. It does this my merging/packaging the files into optimized bundles for the browser. The goal is to reduce the number of requests for files when a user visits a web page.

Popular JavaScript bundlers

1. Webpack
2. esbuild
3. parcel
4. rollup
5. browserify

#### Code Splitting

By splitting the application's bundle into smaller chuncks required by each **entry point**(unique URLS), the initial load times are improved because only the required code is loaded for that page. This process is known as Code Splitting.

#### Build Time cs Runtime

**Build Time** is the series of steps that prepare your app's code for production. Modern platforms like Netlify and Vercel will handle this step when you deploy your code to a connected git repo.

The following command is used that enables the process to begin:

```bash
npm run build
```

Optimizing code for production is critical otherwise the UX will suffer. Files that are optimized include:

- HTML files for statically generated pages
- JavaScript code for rendering pages on the server
- JavaScript code for making pages interactive on the client side

After your app has been deployed and a user sends a request, that is referred to as **Runtime**.

#### Client and Server

The **client** is the browser that the user is on to interact with your application. Through this interface, requests are then sent to the backend server which returns a response to the browser.

The **server** is where your application code lives, which is usually some data center in a remote location. AWS, Google and other large corporations have immense facilities that host data.

#### Rendering

Rendering converts your React code into the HTML representation of your UI.

There are three main rendering methods. If you wish to use all of these in React, please see the `Next JS` section.

1. Server-Side Rendering

Where HTML of each page is generated on a server for **each** request. The generated HTML, JSON and JavaScript is then sent to the client.

**Hydration** is the process of making the page interactive (with JavaScript) after it has loaded the HTML.

2. Static Site Generation

Content is generated once at build time and the HTML is stored in a CDN which is re-used for each request. In other words, the HTML is generated on the server but there is no server request at runtime.

3. Client-Side Rendering

React is primarily a library to build User Interfaces on the client side. When the browser receives an empty HTML shell from the server along with the JavaScript to construct the UI, the process is all done on the **client-side**.

:::info
Pre-rendering covers both Server-Side and Static Site
:::

#### CDNs and the Edge

:::info
The **Origin** server refers to the main server where the application code lives.
:::

A CDN stores static content like HTML and image files in multiple locations around the world. This content is placed between the client and the origin server so that when a request is made, the CDN closes to the client returns the response. This make content delivery much faster resulting in a better UX.

The Edge is similar to a CDN but instead of just storing static content, the Edge network can run code (caching and code execution) closer to the user. This means that less code is sent to the client and part of the users request doesn't need to go all the way to the origin server.

:::info
**Imperative** programming tells a computer _how_ it should do something whereas **declarative** programming describes _what_ needs to be rendered (in Reacts case).
:::

### Installation

```bash
npx create-next-app@latest
```

If you want to include Taiwindcss as part of the project, use this command:

```bash
npx create-next-app@latest -e with-tailwindcss
```

```jsx
import { useState } from "react";
function Header({ title }) {
  return <h1>{title ? title : "Default Title"}</h1>;
}

export default function HomePage() {
  const name = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Develop. Build. Relase" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}
```

### Axios

Axios is one way of fetching data in JavaScript applications.

First install it with:

```bash
npm i axios
```

Then make a new file in the `page` folder called `bitcoin.js` and add the following code to get the price from the Coinlore API.

```jsx
import Axios from "axios";

export const getStaticProps = async () => {
  const res = await Axios.get("https://api.coinlore.net/api/ticker/?id=90");
  return {
    props: { data: res.data },
  };
};

const Bitcoin = (props) => {
  const btcprice = props.data;

  return (
    <>
      <p>BTC PRICE</p>

      {btcprice?.map((price) => {
        <div key={price.id}>
          <h1>{price.price_usd}</h1>
        </div>;
      })}
    </>
  );
};

export default Bitcoin;
```

### React Query

React Query is for managing server-side state. It removes a lot of boilerplate code associated with state management.

First install `react-query` like so:

```bash
npm i @tanstack/react-query
```

In order to use React Query, you must add a `QueryClientProvider` and `Hydrate` to the base app file, which in Next JS is found under `pages` and is called `_app.tsx`. Setup the file like so:

```tsx
import React from "react";
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = React.useRef(new QueryClient());

  return (
    <QueryClientProvider>
      <Hydrate>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}
```

A simple script to get the BTC price from the CoinLore API using React-Query:

```tsx
import { dehydrate, QueryClient, useQuery } from "react-query";

// Types based on the API data JSON output
type BitcoinData = {
  0: {
    id: string;
    symbol: string;
    name: string;
    ranl: number;
    price_usd: string;
    tsupply: string;
    msupply: string;
    percent_change_24h: string;
  };
};

const getBitcoinData = async () =>
  await (await fetch("https://api.coinlore.net/api/ticker/?id=90")).json();

export default function Bitcoin() {
  // destructuring
  const { data, isLoading, isFetching } = useQuery<BitcoinData>(
    "bitcoin",
    getBitcoinData
  );
  // optional console log to see if it's working
  // console.log(data)

  if (isLoading) return <div>Loading...</div>;

  if (!data) return <div>Error...</div>;

  return (
    <>
      <div>
        <p>{data?.[0].name}</p>
        <p>{data?.[0].price_usd}</p>
        <p>{data?.[0].msupply}</p>
        <p>{data?.[0].rank}</p>
        <p>{data?.[0].percent_change_24h}</p>
      </div>
    </>
  );
}

// Static Props to load beforehand

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery<BitconData>("bitcoin", getBitcoinData);

  return {
    props: {
      dehydrateState: dehydrate(queryClient),
    },
  };
}
```

### The NextJS 13 Way

The new experimental feature which is in Beta, is the `app` folder.

This code snippet fetches a Todos list from an API called JsonPlaceholder. It's a great way to learn how to build on some foundational knowledge.

We need to define what type of data we need to fetch first. Use this as a guide.

```ts title="/typings.d.ts"
export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
```

Add the following code that uses async functions to fetch data and display the results.

```tsx title="/app/todos/TodosList.tsx"
import React from "react"
import Link from "next/link"
import { Todo } from "../../typings"

const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/")
  const todos = Todo[] = await res.json()
  return todos
}

async function TodosList() {
  const todos = await fetchTodos()

  return (
    <>
      {todos.map((todo) => (
        <p key={todo.id}>
          <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
        </p>
      ))}
    </>
  )
}

export default TodosList
```

and for the individual todo items:

```tsx title="/app/todos/[todoId]/page.tsx"
import React from "react";
import { Todo } from "../../typings";
import { notFound } from "next/navigation";

export const dynamicParams = true;

type PageProps = {
  params: {
    todoId: string;
  };
};

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 60 } }
  );

  const todo: Todo = await res.json();
  return todo;
};

async function TodoPage({ params: { todoId } }: PageProps) {
  const todo = await fetchTodo(todoId);

  if (!todo.id) return notFound();

  return (
    <div>
      <p>
        #{todo.id}: {todo.title}
      </p>
      <p>Completed: {todo.compeleted ? "Yes" : "No"}</p>
      {/* @ts-ignore */}
      <p>By User: {todo.userId}</p>
    </div>
  );
}

export default TodoPage;

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: Todo[] = await res.json();

  const trimmedTodos = todos.splice(0, 10);

  return trimmedTodos.map((todo) => ({
    todoId: todo.id.toString(),
  }));
}
```

### Layouts

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex space-x-4 divide-x-2 p-5">
      <div>
        <h1>Search</h1>
      </div>
      <div className="flex-1 pl-5">{children}</div>
    </main>
  );
}
```

### Search

### Framer Motion

### Storybook
