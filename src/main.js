// Este es el punto de entrada de tu aplicacion
import home from './views/home.js';
import register from './views/register.js';
import error from './views/error.js';
import login from './views/login.js';
import form from './views/form.js';
// import { getAuth, signInWithRedirect } from 'firebase/auth';

// const auth

const routes = [
  { path: '/', component: home },
  { path: '/register', component: register },
  { path: '/error', component: error },
  { path: '/login', component: login },
  { path: '/form', component: form },
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
