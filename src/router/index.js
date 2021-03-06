import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";
// import NProgress from 'nprogress';
// import 'nprogress/nprogress.css';

// const progressShowDelay = 100;
// let routeResolved = false;
//
// export function cancelTopProgress() {
//   routeResolved = true;
//   NProgress.done();
//   NProgress.remove();
// }
//
// function tryInitProgress() {
//   routeResolved = false;
//   setTimeout(()=> {
//     if (!routeResolved) {
//       NProgress.start();
//     }
//   }, progressShowDelay);
// }

Vue.use(Router);

let isAuthenticated = !!window.user;

const router = new Router({
    base: "/",
    mode: "history",
    routes, // short for `routes: routes`
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 }; //Scroll to top when routes change
        }
    }
});

// router.afterEach(cancelTopProgress);

router.beforeEach((to, from, next) => {
  // tryInitProgress();

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!isAuthenticated) {
            next({
                path: "/login",
                query: { redirect: to.fullPath }
            });
        } else {
            next();
        }
    } else {
        next(); // make sure to always call next()!
    }
});

export default router;
