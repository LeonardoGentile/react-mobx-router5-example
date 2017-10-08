import {Home} from './components/Home';
import {Index} from './components/Index';
import {Login} from './components/Login';
// Route Nodes
import Sections from './nodecomponents/Sections/Sections';
import SubSections from './nodecomponents/SubSections/SubSections';


export default [
  { name: 'home', path: '/', component: Home},
  { name: 'login', path: '/login', component: Login},
  { name: 'index', path: '/index/:id', component: Index},
  { name: 'section', path: '/section', component: Sections, children: [
    // Sections
    { name: 'home', path: '/home', component: null }, // route without a component, It will throw but app won't fail
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
