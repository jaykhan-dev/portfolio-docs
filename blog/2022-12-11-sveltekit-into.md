---
title: Sveltekit
slug: sveltekit
tags:
  [
    javascript,
    svelte,
    sveltekit,
    web-framework,
    component-framework,
    compiler,
    html,
    css,
    user-interface,
    front-end,
    typescript,
    ssr,
    ssg,
  ]
---

![Sveltekit Header](./img/sveltekit-intro/sveltekit-blog-100.jpg)

[Sveltekit](https://kit.svelte.dev/) is a new web framework which simplifies creating user interfaces with a strong focus on performance, accessibility, and developer experience.

<!-- truncate -->

### Installation

Use the following command to create a basic Sveltekit app. You can do so with NPM, Yarn, or PNPM.

```bash
npm init svelte@next project-name
```

Add Tailwindcss

```bash
npx svelte-add@latest tailwindcss
```

### Overview

#### Folder structure

#### Comparison to other frameworks

#### Vite

### Reactivity

### Props

### Logic

### Events

#### Modifiers

Below is a list of modifiers that can be used on events

- `preventDefault`: for client-side form handling
- `stopPropagation`: preventing the event reaching the next element
- `passive`: improves scrolling preformance on touch/wheel events
- `nonpassive`: explicity set `passive:false`
- `capture`: fires the handler during the _capture_ phase instead of the _bubbling_ phase
- `once`: remove the handler after the first time it runs
- `self`: only trigger handler if `event.target` is the element itself
- `trusted`: only trigger handler if `event.isTrusted` is `true` (i.e user action)

It is possible to chain handlers like `on:click|once|capture={...}`

### Bindings

### Lifecycle

### Stores

### Animation

### Svelte-cubed

```html
<SC.Canvas
  antialias
  background={new THREE.Color("skyblue")}
  fog={new THREE.FogExp2("skyblue", 0.1)}
  shadows
>
  <SC.Group position={[0, -height / 2, 0]}>
    <SC.Mesh
      geometry={new THREE.PlaneGeometry(50, 50)}
      material={new THREE.MeshStandardMaterial({ color: "lightgreen" })}
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
    />
    <SC.Primitive
      object={new THREE.GridHelper(50, 50, "papayawhip", "papayawhip")}
      position={[0, 0.001, 0]}
    />
  </SC.Group>

  <SC.Mesh
    geometry={new THREE.BoxGeometry()}
    material={new THREE.MeshStandardMaterial({ color: 0xff3e00 })}
    scale={[width, height, depth]}
    rotation={[0, spin, 0]}
    castShadow
  />

  <SC.PerspectiveCamera position={[1, 1, 3]} />
  <SC.OrbitControls enableZoom={false} maxPolarAngle={Math.PI * 0.51} />
  <SC.AmbientLight intensity={0.6} />
  <SC.DirectionalLight
    intensity={0.6}
    position={[-2, 3, 2]}
    shadow={{ mapSize: [2048, 2048] }}
  />
</SC.Canvas>
```

The result can be seen in the following image or [link](https://plebeian-market.vercel.app/scenes/three)

![Svelte-cubed Image](./img/sveltekit-intro/svelte-cubed.png)

### Playwright

### Tailwind CSS

### GraphQL

### Headless CMS

#### Sanity

#### Hygraph

#### WordPress
