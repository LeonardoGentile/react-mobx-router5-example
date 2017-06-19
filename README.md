# react-mobx-router5-example 
  
This is a simple setup example for the [react-mobx-router5](https://github.com/LeonardoGentile/react-mobx-router5) project.

### Install and Run

* Fork, clone, or download the project:

```
git clone https://github.com/LeonardoGentile/react-mobx-router5-example.git
```

* Then install the dependencies:

```
npm install
```

* Run development server:

```
npm start
```

Open the web browser to `http://localhost:8888/`

### Routes and Nodes

The project uses this routes configuration:

```javascript
export default [
  { name: 'home', path: '/', component: Home},
  { name: 'login', path: '/login', component: Login},
  { name: 'index', path: '/index/:id', component: Index},
  { name: 'section', path: '/section', component: Sections, children: [
    // Sections
    { name: 'home', path: '/home', component: Home },
    { name: 'login', path: '/login', component: Login },
    { name: 'index', path: '/index/:id', component: Index },
    { name: 'subsection', path: '/subsection', component: SubSections, children: [
      // Subsections
      { name: 'home', path: '/home', component: Home },
      { name: 'login', path: '/login', component: Login },
      { name: 'index', path: '/index/:id', component: Index }
    ]}
  ]}
];

```

That means that the nodes of this app are:

  - `''` the root node, see the `Main` component
  - `'section'`, see the `Sections` component
  - `'section.subsection'`, see the `Subsections` component
  
All this components should be wrapped with `routeNode` HOC.  
Notice that `routeNode` HOC injects an observable `route`, a non-observable `plainRoute` and a (mobx-router5) `routerStore` prop to the wrapped component.

Each one of these uses in turn the `RouteView` component, resposnsible to select and render the various
subcomponent.  
Notice that a `RouteView` component injects a `route` prop to the newly created component. 

The better way to learn about [react-mobx-router5](https://github.com/LeonardoGentile/react-mobx-router5) is to view the source code and play around with this example.

If you have any trouble or doubt please open an issue either here or on [react-mobx-router5](https://github.com/LeonardoGentile/react-mobx-router5) repo.


