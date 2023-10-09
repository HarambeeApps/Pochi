import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/employees',
      name: 'Employees',
      component: () => import('../views/EmployeesView.vue')
    },
    {
      path: '/expenses',
      name: 'Expenses',
      component: () => import('../views/ExpensesView.vue')
    },
    {
      path: '/wallets',
      name: 'User Wallets',
      component: () => import('../views/UserWallets.vue')
    },
    // {
    //   path: '/topup',
    //   name: 'TopUp',
    //   component: () => import('../views/TopUp.vue')
    // },
    {
      path: '/payments',
      name: 'Payments',
      component: () => import('../views/PaymentsView.vue')
    }
  ]
})

export default router
