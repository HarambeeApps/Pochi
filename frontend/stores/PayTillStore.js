import { defineStore } from 'pinia'

export const usePaytillStore = defineStore('paytill', {
  state: () => ({
    currencyType: 'crypto',
    loggedIn: false,
    isTopUpModalOpen: true,
    isDarkMode: false,
    transactions: [],
    employees: [],
    TopUps: [],
    Payments: [],
    Withdrawals: [],
    Budgets: [],
    Wallets:[],

    mobileActiveTab: null
  }),
  getters: {
    isAuthenticated(state) {
      return state.loggedIn
    },
    darkMode(state) {
      return state.isDarkMode
    },
    isTopUp(state) {
      return state.isTopUpModalOpen
    },
    whichCurrency(state) {
      return state.currencyType;
    },
    setCurrencyType(currency) {
      // Add an action to set the currency type
      this.currencyType = currency;
    },
  },
  actions: {
    login() {
      this.isLoggedIn = true
    },

    logout() {
      this.isLoggedIn = false
    }
  }
})
