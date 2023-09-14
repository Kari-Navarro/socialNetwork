// Este es el punto de entrada de tu aplicacion
import home from './componentes/home.js';
import register from './componentes/register.js';
import error from './componentes/error.js';
import login from './componentes/login.js';
// import { getAuth, signInWithRedirect } from 'firebase/auth';

// const auth

const routes = [
  { path: '/', component: home },
  { path: '/register', component: register },
  { path: '/error', component: error },
  { path: '/login', component: login },
];
const defaultRoute = '/';
const root = document.getElementById('root');

function navigateTo(hash) {
  const route = routes.find((routeFound) => routeFound.path === hash);

  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );

    if (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    root.appendChild(route.component(navigateTo));
  } else {
    navigateTo('/error');
  }
}

window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);

const App = () => ({});

export { App, navigateTo };
