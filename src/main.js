// Este es el punto de entrada de tu aplicacion
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase';
import home from './views/home.js';
import register from './views/register.js';
import error from './views/error.js';
import login from './views/login.js';
import dogRegister from './views/dogform.js';
import feed from './views/feed.js';
import post from './views/post.js';
import navBar from './views/navigateBar.js';

const routes = [
  { path: '/', component: home },
  { path: '/register', component: register },
  { path: '/error', component: error },
  { path: '/login', component: login },
  { path: '/dogform', component: dogRegister },
  { path: '/feed', component: feed },
  { path: '/post', component: post },
  { path: '/navBar', component: navBar },
];
const defaultRoute = '/';
const root = document.getElementById('root');
let userSession;

function navigateTo(pathName) {
  const route = routes.find((routeFound) => routeFound.path === pathName);

  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );

    if (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    root.appendChild(route.component(navigateTo, userSession));
  } else {
    navigateTo('/error');
  }
}

// Observador de la sesion del usuario, obtenemos primero el usuario y despues navegamos en la app
onAuthStateChanged(auth, (user) => {
  const userData = localStorage.getItem('user');
  if (user && userData) {
    // Si el usuario tiene una sesion iniciada, siempre lo mandaremos al feed
    userSession = user;
    navigateTo('/feed');
    // Si el usuario no tiene sesion iniciada
    // y quiere entrar a las rutas de la app, lo mandamos a login
  } else {
    // Si el usuario esta en /, /login, /recoverPassword o /signUp, lo dejamos en esa misma ruta
    userSession = undefined;
    navigateTo('./');
  }
});

window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);

const App = () => ({});

export { App, navigateTo };
