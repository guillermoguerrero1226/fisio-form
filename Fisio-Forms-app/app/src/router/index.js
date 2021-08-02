import Vue from "vue";
import VueRouter from "vue-router";
import store from "./../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/registrarse",
    name: "registrarse",
    component: () => import("../views/SignUp.vue"),
  },
  {
    path: "/home",
    name: "home",
    beforeEnter: (to, from, next) => {
      if (!store.state.user.loggedUser) {
        next("/login");
      }
      next();
    },
    component: () => import("../views/Home.vue"),
    children: [
      {
        path: "",
        component: () => import("../components/CaseList.vue"),
      },
      {
        path: "/casos",
        name: "casos",
        component: () => import("../components/CaseList.vue"),
      },
      {
        path: "/registrar-usuario",
        name: "registrar usuario",
        component: () =>
          import("../components/patient/PatientRecordStepper.vue"),
      },
      {
        path: "/caso/:id",
        name: "ver caso",
        component: () =>
          import("../components/patient/PatientRecordStepper.vue"),
      },
      {
        path: "/modificar-evento/:id",
        name: "modificar evento",
        beforeEnter: (to, from, next) => {
          if (!store.state.user.loggedUser.token) {
            next("/login");
          }
          next();
        },
        component: () => import("../components/EventSaveForm.vue"),
      },
      {
        path: "/carrito-compras",
        name: "carrito de compras",
        component: () => import("../components/ShoppingCart.vue"),
      },
      {
        path: "/mis-boletos",
        name: "mis-boletos",
        beforeEnter: (to, from, next) => {
          if (!store.state.user.loggedUser.token) {
            next("/login");
          }
          next();
        },
        component: () => import("../components/TicketList.vue"),
      },
    ],
  },
  {
    path: "*",
    redirect: "/eventos",
  },
];

const mode = process.env.VUE_APP_ROUTER_MODE || "hash";

const router = new VueRouter({
  mode,
  routes,
});

export default router;
