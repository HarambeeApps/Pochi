<template>
  <div>
    <MyHeader />
    <div class="flex flex-row bg-white">
      <aside class="w-[288px] px-4 border-r border-[#F2F7FF]">
        <div class="flex flex-col space-y-4">
          <div class="p-2">
            <p class="text-[#6D788C] text-base font-normal">Team</p>
          </div>

          <TeamListItem text="All" bgcolor="#36B293" />
          <TeamListItem text="Engineering" bgcolor="#36B293" />
          <TeamListItem text="Marketing" bgcolor="#36B293" />
          <TeamListItem text="Sales" bgcolor="#36B293" />
          <TeamListItem text="Support" bgcolor="#36B293" />
          <TeamListItem text="Design" bgcolor="#36B293" />
          <TeamListItem text="Product" bgcolor="#36B293" />
          <TeamListItem text="Finance" bgcolor="#36B293" />
        </div>
      </aside>
      <main class="py-4 w-full">
        <div class="px-4 flex flex-col space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <OverviewCard
              header="Total Spent"
              fiat="Fiat"
              currency1="USDT"
              currency2="ETH"
              headercolor="#36B293"
              bgcolor="#EDFFFB"
              fiatColor="#36B293"
              currency1color="#36B293"
              currency2color="#36B293"
            />
            <OverviewCard
              header="Outstanding Amount"
              fiat="Fiat"
              currency1="ETH"
              currency2="NEAR"
              headercolor="#4C98FF"
              bgcolor="#E0ECFE"
              fiatColor="#4C98FF"
              currency1color="#4C98FF"
              currency2color="#4C98FF"
            />
          </div>

          <div class="flow-root overflow-hidden">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table class="min-w-full divide-y divide-gray-300 bg-white rounded-lg">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        class="py-4 px-3 text-left text-sm leading-6 font-normal text-[#6D788C]"
                      >
                        <a href="#" class="group inline-flex border-b border-[#D5DCE8]">
                          Name
                          <span
                            class="ml-2 flex-none rounded text-gray-900 group-hover:bg-gray-200"
                          >
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
                          <span
                            class="ml-2 flex-none rounded text-gray-900 group-hover:bg-gray-200"
                          >
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
                          <span
                            class="ml-2 flex-none rounded text-gray-900 group-hover:bg-gray-200"
                          >
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
                          <span
                            class="ml-2 flex-none rounded text-gray-900 group-hover:bg-gray-200"
                          >
                            <ChevronUpDownIcon class="h-5 w-5" aria-hidden="true" />
                          </span>
                        </a>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200">
                    <tr v-for="person in people" :key="person.email">
                      <td
                        class="whitespace-nowrap px-3 py-4 flex flex-row text-sm leading-6 font-medium text-[#6D788C]"
                      >
                        <div class="flex items-center gap-x-2">
                          <img
                            :src="person.imageUrl"
                            alt=""
                            class="h-6 w-6 rounded-full bg-gray-800"
                          />
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
                        <StatusButton
                          bgcolor="#EDFFFB"
                          :status="person.status"
                          textcolor="#36B293"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import MyHeader from '../components/MyHeader.vue'
import OverviewCard from '../components/OverviewCard.vue'
import TeamListItem from '../components/TeamListItem.vue'
import { ChevronUpDownIcon } from '@heroicons/vue/24/outline'
const people = [
  { name: 'Lindsay Walton', value: '16,000', time: '09.08.2023 - 09.08.2023', status: 'Completed' },
  { name: 'Lindsay Walton', value: '16,000', time: '09.08.2023 - 09.08.2023', status: 'Completed' },
  { name: 'Lindsay Walton', value: '16,000', time: '09.08.2023 - 09.08.2023', status: 'Completed' },
  { name: 'Lindsay Walton', value: '16,000', time: '09.08.2023 - 09.08.2023', status: 'Completed' },
  { name: 'Lindsay Walton', value: '16,000', time: '09.08.2023 - 09.08.2023', status: 'Completed' }
  // More people...
]
</script>
