<template>
  <div class="bg-white">
    <div class="flex flex-col">
      <div class="flex flex-col md:flex-row justify-between p-4 space-y-1 md:space-y-0">
        <div class="flex flex-row space-x-3">
          <Pill text="Blocks" />
          <Pill text="Validators" />
          <Pill text="Tokens" />
        </div>
        <div class="flex flex-row space-x-2">
          <div>
          <button
      @click="store.isTopUpModalOpen = true"
      class="py-1 px-4 bg-transaparent rounded-lg border flex flex-row items-center space-x-2 border-[#F2F8FF] text-[#1C3680]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M13.3437 4.66669H3.41659C3.18638 4.66669 2.99992 4.48023 2.99992 4.25002C2.99992 4.01981 3.18638 3.83335 3.41659 3.83335H13.4166C13.6468 3.83335 13.8333 3.6469 13.8333 3.41669C13.8333 2.72632 13.2736 2.16669 12.5833 2.16669H2.99992C2.07935 2.16669 1.33325 2.91278 1.33325 3.83335V12.1667C1.33325 13.0873 2.07935 13.8334 2.99992 13.8334H13.3437C14.0734 13.8334 14.6666 13.2727 14.6666 12.5834V5.91669C14.6666 5.22736 14.0734 4.66669 13.3437 4.66669ZM12.1666 10.0834C11.7064 10.0834 11.3333 9.71018 11.3333 9.25002C11.3333 8.78986 11.7064 8.41669 12.1666 8.41669C12.6267 8.41669 12.9999 8.78986 12.9999 9.25002C12.9999 9.71018 12.6267 10.0834 12.1666 10.0834Z"
          fill="#4C98FF"
        />
      </svg>
      <span class="text-[#4C98FF]"  >
        Top Up
      </span>
    </button>
  </div>
          
          <BtnPill text="Payment" bgColor="#E0ECFE" textcolor="#4C98FF"  />
          <!--div
            class="bg-blue-500 h-8 w-8 flex overflow-hidden text-white items-center justify-center uppercase leading-none align-middle relative z-0 rounded-full"
          >
            <span>d</span>
          </div-->
          <NotificationCount notification-count="3" initial="d"/>
        </div>
      </div>

      <div class="flex flex-col md:flex-row justify-between p-4">
        <HeaderText headertext="Dashboard" />
        <div class="flex flex-row space-x-4">
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
                  'rounded-md p-1 text-sm font-medium'
                ]"
                :aria-current="tab.current ? 'page' : undefined"
                >{{ tab.name }}</a
              >
            </nav>
          </div>
         
        </div>
        <div class="flex flex-row items-center space-x-2">
            <p>
              January
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M7.48188 11.8312L1.54801 5.89727C1.26183 5.61108 1.26183 5.1471 1.54801 4.86095L2.2401 4.16886C2.5258 3.88316 2.98883 3.88261 3.2752 4.16763L8.00006 8.87035L12.7249 4.16763C13.0112 3.88261 13.4743 3.88316 13.76 4.16886L14.4521 4.86095C14.7383 5.14713 14.7383 5.61111 14.4521 5.89727L8.51823 11.8312C8.23205 12.1173 7.76807 12.1173 7.48188 11.8312Z" fill="#4C98FF"/>
</svg>  <ChevronDownIcon/>
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
    </div>
  </div>

  <main class="py-4">
    <div class="px-4 flex flex-col space-y-4">
      <div class="grid grid-cols-2 gap-4">
        <OverviewCard
          header="Outstanding Amount"
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
          header="Total Payment"
          fiat="Fiat"
          currency1="ETH"
          currency2="NEAR"
          headercolor="#4C98FF"
          bgcolor="#E9ECFE"
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
                      Salary
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
                      Budget
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
                      Payment
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
                      Level
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
                      Contract
                      <span class="ml-2 flex-none rounded text-gray-900 group-hover:bg-gray-200">
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
                      {{ person.salary }}
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm leading-6 text-[#6D788C]">
                    {{ person.budget }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm leading-6 text-[#6D788C]">
                    {{ person.payment }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm leading-6 text-[#6D788C]">
                    {{ person.level }}
                    <!--StatusButton bgcolor="#EDFFFB" :status="person.status" textcolor="#36B293" /-->
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm leading-6 text-[#6D788C]">
                    {{ person.contract }}
                    <!--StatusButton bgcolor="#EDFFFB" :status="person.status" textcolor="#36B293" /-->
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import OverviewCard from '../components/OverviewCard.vue'
import Transactions from '../components/Transactions.vue'
import {
  ChevronDownIcon,
  ChevronUpDownIcon,
  ListBulletIcon,
  MagnifyingGlassIcon
} from '@heroicons/vue/24/outline'

const people = [
  { name: 'Ralph Edwards', salary: '16,000',payment: '10,000 0.001 ', budget: '80% - 20%', level: 'Internship',contract:'Probation' },
  { name: 'Ralph Edwards', salary: '16,000',payment: '10,000 0.001 ', budget: '80% - 20%', level: 'Internship',contract:'Probation' },
  { name: 'Ralph Edwards', salary: '16,000',payment: '10,000 0.001 ', budget: '80% - 20%', level: 'Internship',contract:'Probation' },
  { name: 'Ralph Edwards', salary: '16,000',payment: '10,000 0.001 ', budget: '80% - 20%', level: 'Internship',contract:'Probation' },
  { name: 'Ralph Edwards', salary: '16,000',payment: '10,000 0.001 ', budget: '80% - 20%', level: 'Internship',contract:'Probation' },
  { name: 'Ralph Edwards', salary: '16,000',payment: '10,000 0.001 ', budget: '80% - 20%', level: 'Internship',contract:'Probation' },
  { name: 'Ralph Edwards', salary: '16,000',payment: '10,000 0.001 ', budget: '80% - 20%', level: 'Internship',contract:'Probation' },
 
  // More people...
]
import Pill from '../components/Pill.vue'
import HeaderText from '../components/HeaderText.vue'
import BtnPill from '../components/BtnPill.vue'
import NotificationCount from '../components/NotificationIcon.vue'
import { usePaytillStore } from '../stores/PayTillStore'
const store = usePaytillStore()





const tabs = [
  { name: 'Pending', href: '#', current: false },
  { name: 'Outstanding', href: '#', current: true }
]

</script>
