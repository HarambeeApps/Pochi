<template>
  <div class="bg-[#F2F7FF] rounded">
    <router-link
      active-class="bg-gray-900 text-white hover:bg-gray-900 hover:text-white router-link-exact-active hover:bg-gray-50 group flex items-center px-4 py-3 text-sm font-medium rounded-md"
      class="hover:bg-gray-50 group flex items-center px-4 py-3 text-sm font-medium rounded-md"
      to="/dashboard"
    >
      <span>Dashboard</span>
    </router-link>

    <router-link
      active-class="bg-gray-900 text-white hover:bg-gray-900 hover:text-white router-link-exact-active hover:bg-gray-50 group flex items-center px-4 py-3 text-sm font-medium rounded-md"
      class="hover:bg-gray-50 group flex items-center px-4 py-3 text-sm font-medium rounded-md"
      to="/employees"
    >
      <span>Employees</span>
    </router-link>
    <router-link
      active-class="bg-gray-900 text-white hover:bg-gray-900 hover:text-white router-link-exact-active hover:bg-gray-50 group flex items-center px-4 py-3 text-sm font-medium rounded-md"
      class="hover:bg-gray-50 group flex items-center px-4 py-3 text-sm font-medium rounded-md"
      to="/employees"
    >
      <span>Payments</span>
    </router-link>
  </div>
</template>
