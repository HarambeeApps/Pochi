<template>
  <div class="bg-white p-4 rounded-xl">
    <div class="flex flex-col">
      <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-center">
        <div class="items-center">
          <p class="self-start font-semibold text-base text-[#2A2D33]">Transactions</p>
        </div>

        <div class="flex flex-row space-x-4 items-center">
          <p class="self-start font-normal text-base text-[#6D788C]">Type</p>

          <button class="inline-flex space-x-2">
            <span class="text-[#4C98FF]">All</span>
            <ChevronDownIcon class="h-5 w-5 text-[#4C98FF]" />
          </button>
        </div>

        <div>
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
        </div>

        <div>
          <button class="inline-flex space-x-2 bg-[#E0ECFE] rounded-lg py-1 px-4">
            <ListBulletIcon class="h-5 w-5 text-[#227BF6]" aria-hidden="true" />
            <p class="whitespace-nowrap text-[#227BF6]">View All</p>
          </button>
        </div>
      </div>

      <!-- Table-->
      <div class="flow-root overflow-hidden">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table class="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="py-4 px-3 text-left text-sm leading-6 font-normal text-[#6D788C]"
                  >
                    <a href="#" class="group inline-flex border-b border-[#D5DCE8]">
                      Name
                      <span class="ml-2 flex-none rounded text-gray-900 group-hover:bg-gray-200">
                        <ChevronUpDownIcon class="h-5 w-5" aria-hidden="true" />
                      </span>
                    </a>
                  </th>
                  <th
                    scope="col"
                    class="py-4 px-3 text-left text-sm leading-6 font-normal text-[#6D788C]"
                  >
                    <a href="#" class="group inline-flex border-b border-[#D5DCE8]">
                      Type
                      <span class="ml-2 flex-none rounded text-gray-900 group-hover:bg-gray-200">
                        <ChevronUpDownIcon class="h-5 w-5" aria-hidden="true" />
                      </span>
                    </a>
                  </th>
                  <th
                    scope="col"
                    class="py-4 px-3 text-left text-sm leading-6 font-normal text-[#6D788C]"
                  >
                    <a href="#" class="group inline-flex border-b border-[#D5DCE8]">
                      Time
                      <span class="ml-2 flex-none rounded text-gray-900 group-hover:bg-gray-200">
                        <ChevronUpDownIcon class="h-5 w-5" aria-hidden="true" />
                      </span>
                    </a>
                  </th>
                  <th
                    scope="col"
                    class="py-4 px-3 text-left text-sm leading-6 font-normal text-[#6D788C]"
                  >
                    <a href="#" class="group inline-flex border-b border-[#D5DCE8]">
                      Status
                      <span class="ml-2 flex-none rounded text-gray-900 group-hover:bg-gray-200">
                        <ChevronUpDownIcon class="h-5 w-5" aria-hidden="true" />
                      </span>
                    </a>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="person in people" :key="person.email">
                  <td
                    class="whitespace-nowrap px-3 py-4 flex flex-row text-sm leading-6 font-medium text-[#6D788C]"
                  >
                    <div class="flex items-center gap-x-2">
                      <img :src="person.imageUrl" alt="" class="h-6 w-6 rounded-full bg-gray-800" />
                      {{ person.name }}
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm leading-6 text-[#6D788C]">
                    <div class="flex items-center gap-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                      >
                        <path
                          d="M8.33325 10C9.43782 10 10.3333 9.10457 10.3333 8C10.3333 6.89543 9.43782 6 8.33325 6C7.22868 6 6.33325 6.89543 6.33325 8C6.33325 9.10457 7.22868 10 8.33325 10Z"
                          fill="#4C98FF"
                        />
                        <path
                          d="M0.333252 4C0.333252 3.44772 0.780967 3 1.33325 3H15.3333C15.8855 3 16.3333 3.44772 16.3333 4V12C16.3333 12.5523 15.8855 13 15.3333 13H1.33325C0.780967 13 0.333252 12.5523 0.333252 12V4ZM3.33325 4C3.33325 5.10457 2.43782 6 1.33325 6V10C2.43782 10 3.33325 10.8954 3.33325 12H13.3333C13.3333 10.8954 14.2287 10 15.3333 10V6C14.2287 6 13.3333 5.10457 13.3333 4H3.33325Z"
                          fill="#4C98FF"
                        />
                      </svg>
                      {{ person.value }}
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm leading-6 text-[#6D788C]">
                    {{ person.time }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm leading-6 text-[#6D788C]">
                    <StatusButton bgcolor="#EDFFFB" :status="person.status" textcolor="#36B293" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  ChevronDownIcon,
  ChevronUpDownIcon,
  ListBulletIcon,
  MagnifyingGlassIcon
} from '@heroicons/vue/24/outline'
import VueAvatar from '@webzlodimir/vue-avatar'
import '@webzlodimir/vue-avatar/dist/style.css'
const people = [
  {
    name: 'Lindsay Walton',
    value: '16,000',
    time: '09.08.2023 - 09.08.2023',
    status: 'Completed',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Lindsay Walton',
    value: '16,000',
    time: '09.08.2023 - 09.08.2023',
    status: 'Completed',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Lindsay Walton',
    value: '16,000',
    time: '09.08.2023 - 09.08.2023',
    status: 'Completed',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Lindsay Walton',
    value: '16,000',
    time: '09.08.2023 - 09.08.2023',
    status: 'Completed',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Lindsay Walton',
    value: '16,000',
    time: '09.08.2023 - 09.08.2023',
    status: 'Completed',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
]
import StatusButton from '../components/StatusButton.vue'
</script>
