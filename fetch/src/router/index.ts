import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/components/views/user-login.vue';
import Registro from '@/components/views/user-register.vue';
import TablaDatos from '@/components/views/user-table.vue';

const routes = [
  {
    path: '/',
    name: 'UserLogin',
    component: Login
  },
  {
    path: '/register',
    name: 'UserRegister',
    component: Registro
  },
  {
    path: '/users',
    name: 'UserTable',
    component: TablaDatos
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
