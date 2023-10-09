<template>
  <div>
  <MyHeader />

  <main class="py-4">
    <div class="px-4 flex flex-col space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
        <OverviewCard
          header="Upcoming Payments"
          fiat="Fiat"
          currency1="ETH"
          currency2="NEAR"
          headercolor="#1F2937"
          bgcolor="#FFF"
          fiatColor="#36B293"
          currency1color="#4C98FF"
          currency2color="#F6BB22"
        />
        <OverviewCard
          header="Transactions"
          fiat="Fiat"
          currency1="ETH"
          currency2="NEAR"
          headercolor="#1F2937"
          bgcolor="#FFF"
          fiatColor="#36B293"
          currency1color="#36B293"
          currency2color="#F6BB22"
        />
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="rounded-xl bg-white py-4 px-6 self-stretch flex flex-col space-y-4">
          <div class="flex flex-col">
            <p class="self-start font-semibold text-base text-[#2A2D33]">Budget By Teams</p>
            <p class="self-start font-semibold text-sm text-[#6D788C] leading-6">
              Based on Contract
            </p>
          </div>

          <div class="flex flex-col md:flex-row">
            <div class="basis-1/3">
              <PolarChart />
            </div>
            <div class="basis-2/3">
              <div class="flex flex-col space-y-2">
                <BudgetListItem text="Product" bgcolor="#7DD3FC" />
                <BudgetListItem text="Marketing" bgcolor="#30CD9A" />
                <BudgetListItem text="Sales" bgcolor="#FF9425" />
                <BudgetListItem text="Development" bgcolor="#D946EF" />
                <BudgetListItem text="Operations" bgcolor="#7897FF" />
                <BudgetListItem text="Customer Service" bgcolor="#FEC400" />
                <BudgetListItem text="Hr Department" bgcolor="#C084FC" />
                <BudgetListItem text="Admin" bgcolor="#F9A8D4" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Transactions />
        </div>
      </div>
    </div>
  </main>
  <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-10" @close="open = false">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-[#2A2D33] bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div
            class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
          >
            <TransitionChild
              as="template"
              enter="ease-out duration-300"
              enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel
                class="absolute top-0 right-0 transform overflow-hidden sm:mt-[72px] sm:mr-[56px] rounded-lg bg-white text-left shadow-xl transition-all  sm:min-w-[600px] sm:max-w-lg"
              >
                <div class="flex flex-col">
                  <div class="flex flex-row px-4 py-1 space-x-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M4.64645 4.64645C4.84171 4.45118 5.15829 4.45118 5.35355 4.64645L8 7.29289L10.6464 4.64645C10.8417 4.45118 11.1583 4.45118 11.3536 4.64645C11.5488 4.84171 11.5488 5.15829 11.3536 5.35355L8.70711 8L11.3536 10.6464C11.5488 10.8417 11.5488 11.1583 11.3536 11.3536C11.1583 11.5488 10.8417 11.5488 10.6464 11.3536L8 8.70711L5.35355 11.3536C5.15829 11.5488 4.84171 11.5488 4.64645 11.3536C4.45118 11.1583 4.45118 10.8417 4.64645 10.6464L7.29289 8L4.64645 5.35355C4.45118 5.15829 4.45118 4.84171 4.64645 4.64645Z"
                        fill="#4C98FF"
                      />
                    </svg>
                    <p class="text-sm font-normal text-[#4C98FF] leading-6">Close</p>
                  </div>

                  <div class="flex flex-row ">
<!-- left side-->
<div class="basis-2/5 border-r border-[#F2F7FF]">
  <div class="flex flex-col p-4 space-y-4 ">
    <div class="">
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
          <div class="hidden sm:block ">
            <nav class="inline-flex  rounded-lg border border-[#E0ECFE] p-1 shrink " aria-label="Tabs">
              <a
                v-for="tab in tabs"
                :key="tab.name"
                :href="tab.href"
                @click="tabs.forEach((tab) => (tab.active = true))"
                :class="[
                  tab.current
                    ? 'bg-[#E0ECFE] text-[#227BF6]'
                    : 'text-gray-500 hover:text-[#227BF6] hover:bg-[#E0ECFE]',
                  'rounded-md px-3 text-sm leading-6 font-medium'
                ]"
                :aria-current="tab.current ? 'page' : undefined"
                >{{ tab.name }}</a
              >
            </nav>
          </div>
        
        <!--div class="hidden sm:block">
          <nav class="inline-flex  rounded-lg border border-[#E0ECFE] p-1 shrink">
            <div
            @click="store.currencyType = 'fiat'"
              active-class="cursor-pointer bg-[#E0ECFE] text-[#227BF6] rounded-md px-3 text-sm leading-6 font-medium "
              class="cursor-pointer text-gray-500 hover:text-[#227BF6] hover:bg-[#E0ECFE] bg-transparent rounded-md px-3 text-sm leading-6 font-medium"
             
            >
            <span class="text-sm leading-6 font-medium">Fiat</span>
          </div>
            
          
            <div
            @click="store.currencyType = 'crypto'"
            active-class="cursor-pointer bg-[#E0ECFE] text-[#227BF6] rounded-md px-3  "
              class="cursor-pointer text-gray-500 hover:text-[#227BF6] hover:bg-[#E0ECFE] bg-transparent rounded-md px-3 "
             
            >
              <span class="text-sm leading-6 font-medium">Crypto</span>
          </div>
          </nav>
        </div-->
    
         
        </div>
        <div class="flex flex-row space-x-2 py-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M10.6667 12V13.3334H5.33337V12H10.6667ZM7.33337 5.32669V10.6667H8.66671V5.32669H10.6667L8.00004 2.66669L5.33337 5.32669H7.33337Z" fill="#4C98FF"/>
</svg>
          
          <span class="text-sm leading-6 font-semibold text-[#4C98FF] cursor-pointer"
           v-if="store.currencyType === 'fiat'"
                >Bank Account </span
              >
              <span class="text-sm leading-6 font-semibold text-[#4C98FF] cursor-pointer" v-else>
                Deposit From My Wallet
              </span>
        </div>
        <div class="flex flex-row space-x-2 py-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M11 5.5C11 5.22386 11.2239 5 11.5 5H13.5C13.7761 5 14 5.22386 14 5.5V6.5C14 6.77614 13.7761 7 13.5 7H11.5C11.2239 7 11 6.77614 11 6.5V5.5Z" fill="#B8C2D6"/>
  <path d="M2 2C0.895431 2 0 2.89543 0 4V12C0 13.1046 0.895431 14 2 14H14C15.1046 14 16 13.1046 16 12V4C16 2.89543 15.1046 2 14 2H2ZM15 4V9H1V4C1 3.44772 1.44772 3 2 3H14C14.5523 3 15 3.44772 15 4ZM14 13H2C1.44772 13 1 12.5523 1 12V11H15V12C15 12.5523 14.5523 13 14 13Z" fill="#B8C2D6"/>
</svg>
<p class="text-sm leading-6 font-semibold text-[#B8C2D6] cursor-pointer" >
            By Visa / mastercard
          </p>
        </div>
  </div>

</div>
<!-- right side-->
<div class="basis-3/5">
<div class="flex flex-col p-4 space-y-4">
  <p class="text-sm text-center leading-6 font-semibold text-[#919DB5]" >
    Open your bank and scan the QR to start Top up money
          </p>

          <div class="px-2 justify-center items-center text-center ">
<img src="../images/qr-code.png" class="h-[200px] text-center"/>
          </div>
          <div class="rounded-xl border norder-[#F2F7FF] flex flex-col p-2">
            <p class="text-sm leading-6 font-semibold text-[#919DB5]" >
   Account Number
          </p>
          <div class="flex flex-row justify-between">
            <p class="text-sm leading-6 font-semibold text-[#919DB5]" >
              93840148580
          </p>
          <div class="h-6 w-6 rounded-md bg-[#E0ECFE] items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
<path d="M7.875 9.75V10.5312C7.875 10.7901 7.66514 11 7.40625 11H2.09375C1.83486 11 1.625 10.7901 1.625 10.5312V3.34375C1.625 3.08486 1.83486 2.875 2.09375 2.875H3.5V8.65625C3.5 9.25936 3.99064 9.75 4.59375 9.75H7.875ZM7.875 3.03125V1H4.59375C4.33486 1 4.125 1.20986 4.125 1.46875V8.65625C4.125 8.91514 4.33486 9.125 4.59375 9.125H9.90625C10.1651 9.125 10.375 8.91514 10.375 8.65625V3.5H8.34375C8.08594 3.5 7.875 3.28906 7.875 3.03125ZM10.2377 2.42521L8.94979 1.13729C8.86188 1.04938 8.74265 1 8.61834 1H8.5V2.875H10.375V2.75666C10.375 2.63234 10.3256 2.51312 10.2377 2.42521Z" fill="#227BF6"/>
</svg>
          </div>
          </div>
          </div>
</div>
</div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>
<script setup>
import OverviewCard from '../components/OverviewCard.vue'
import Transactions from '../components/Transactions.vue'
import PolarChart from '../components/PolarChart.vue'
import BudgetListItem from '../components/BudgetListItem.vue'
import MyHeader from '../components/MyHeader.vue'
import { usePaytillStore } from '../stores/PayTillStore'
import {ref } from 'vue'
const store = usePaytillStore()
var open = ref(true)


const tabs = ref([
  { name: 'Fiat', href: '#', current: true },
  { name: 'Crypto', href: '#', current: false },
]);


import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'



</script>
