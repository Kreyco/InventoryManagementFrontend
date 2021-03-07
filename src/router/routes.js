const SignIn = () => import(/* webpackChunkName: "dynamically-imported-component" */ '../components/Signin');
const OrderView = () => import(/* webpackChunkName: "dynamically-imported-component" */ '../views/OrderView');

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
    path: "/orders",
    name: "orders",
    meta: {
      // requiresAuth: true
    },
    component: OrderView
  },
  {
    path: "/",
    name: "home",
    meta: {
      // requiresAuth: true
    },
    component: OrderView
  }
];

export default routes;

