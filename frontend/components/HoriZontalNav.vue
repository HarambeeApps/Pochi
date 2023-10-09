<template>
  <div class="flex flex-col md:flex-row justify-between p-4">
    <HeaderText :headertext="props.text" />
    <div class="rounded-lg border border-[#E0ECFE] p-1">
      <div class="sm:hidden">
        <label for="tabs" class="sr-only">Select a tab</label>
        <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
        <select
          id="tabs"
          name="tabs"
          class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">
            {{ tab.name }}
          </option>
        </select>
      </div>
      <div class="hidden sm:block">
        <nav class="flex space-x-4" aria-label="Tabs">
          <a
            v-for="tab in tabs"
            :key="tab.name"
            :href="tab.href"
            :class="[
              tab.current
                ? 'bg-[#E0ECFE] text-[#227BF6]'
                : 'text-gray-500 hover:text-[#227BF6] hover:bg-[#E0ECFE]',
              'rounded-md px-3 py-2 text-sm font-medium'
            ]"
            :aria-current="tab.current ? 'page' : undefined"
            >{{ tab.name }}</a
          >
        </nav>
      </div>
    </div>

    <div class="flex flex-row gap-4">
      <button class="py-1 px-4 gap-2 items-center">
        <p class="text-[#6D788C] text-sm leading-6">Team</p>
      </button>
      <button class="py-1 px-4 gap-2 items-center inline-flex">
        <p class="text-[#4C98FF] text-sm leading-6">Product</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M7.48176 11.8312L1.54789 5.89727C1.26171 5.61108 1.26171 5.1471 1.54789 4.86095L2.23998 4.16886C2.52568 3.88316 2.98871 3.88261 3.27508 4.16763L7.99993 8.87035L12.7248 4.16763C13.0111 3.88261 13.4742 3.88316 13.7599 4.16886L14.4519 4.86095C14.7381 5.14713 14.7381 5.61111 14.4519 5.89727L8.51811 11.8312C8.23192 12.1173 7.76794 12.1173 7.48176 11.8312Z"
            fill="#4C98FF"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(['text', 'bgColor'])
</script>
