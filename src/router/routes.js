const SignIn = () => import(/* webpackChunkName: "dynamically-imported-component" */ '../components/Signin');

const routes = [
  {
    path: "/signin",
    name: "signIn",
    component: SignIn
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../components/Login.vue")
  },
  {
    path: "/contacts",
    name: "contacts",
    meta: {
      requiresAuth: true
    },
    component: () =>
      import(/* webpackChunkName: "contacts" */ "../views/ContactList.vue")
  },
  {
    path: "/",
    name: "home",
    meta: {
      requiresAuth: true
    },
    component: SignIn
    // component: () =>
      // import(/* webpackChunkName: "home" */ "../views/Dashboard.vue")
  }
];

export default routes;

