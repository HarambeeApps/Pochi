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
</template>

<script setup>
import Pill from '../components/Pill.vue'
import HeaderText from '../components/HeaderText.vue'
import BtnPill from '../components/BtnPill.vue'
import NotificationCount from '../components/NotificationIcon.vue'
import { usePaytillStore } from '../stores/PayTillStore'
const store = usePaytillStore()





const tabs = [
  { name: 'Quarterly', href: '#', current: false },
  { name: 'Monthly', href: '#', current: true },
  { name: 'Yearly', href: '#', current: false }
]

</script>
