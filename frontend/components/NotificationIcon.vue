<template>
    <div class="relative">
        <div class="absolute rounded-full bg-white px-1  items-center justify-center -top-0 -right-0  -mt-1 -mr-1">
<div class="bg-red-600 h-4 w-4 rounded-full ">
    <p class="text-[10px] font-normal leading-3 text-[#FFF2F3] text-center">
    {{props.notificationCount}}
</p>
</div>

</div>

     <div
            class="bg-blue-500  h-8 w-8 flex overflow-hidden text-white items-center justify-center uppercase leading-none align-middle relative z-0 rounded-full"
          >
          <p class="text-sm font-normal leading-[22px] text-[#F2F7FF]">
 {{ props.initial }}   
</p>
          </div>
        </div>

</template>
<script setup>
const props = defineProps(['notificationCount', 'initial'])
</script>