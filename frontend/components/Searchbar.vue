<template>
  <div class="relative rounded-md shadow-sm items-center">
    <input
      type="text"
      name="search-transaction"
      id="search-transaction"
      class="block w-full rounded-md bg-[#F8FAFD] border-0 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Search"
    />
    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
      <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
    </div>
  </div>
</template>
<script setup></script>
