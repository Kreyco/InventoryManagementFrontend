const SearchView = () => import(/* webpackChunkName: "search-view" */ '../views/SearchView');
const SignIn = () => import(/* webpackChunkName: "signin" */ '../views/Signin');
const Login = () => import(/* webpackChunkName: "login" */ '../views/Login');
const OrderView = () => import(/* webpackChunkName: "order-view" */ '../views/OrderView');
const ProductView = () => import(/* webpackChunkName: "product-view" */ '../views/ProductView');

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
      requiresAuth: true
    },
    component: OrderView
  },
  {
    path: "/products",
    name: "products",
    meta: {
      requiresAuth: true
    },
    component: ProductView
  },
  {
    path: "/search",
    name: "search",
    meta: {
      requiresAuth: true
    },
    component: SearchView
  },
  {
    path: "/",
    name: "home",
    meta: {
      requiresAuth: true
    },
    component: SearchView
  }
];

export default routes;
