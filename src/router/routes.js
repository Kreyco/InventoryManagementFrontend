const SignIn = () => import(/* webpackChunkName: "dynamically-imported-component" */ '../views/Signin');
const Login = () => import(/* webpackChunkName: "dynamically-imported-component" */ '../views/Login');
const OrderView = () => import(/* webpackChunkName: "dynamically-imported-component" */ '../views/OrderView');
const ProductView = () => import(/* webpackChunkName: "dynamically-imported-component" */ '../views/ProductView');

const routes = [
  {
    path: "/signin",
    name: "signIn",
    component: SignIn
  },
  {
    path: "/login",
    name: "login",
    component: Login
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
    path: "/products",
    name: "products",
    meta: {
      // requiresAuth: true
    },
    component: ProductView
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

