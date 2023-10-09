<template>
  <div class="flex flex-row justify-between items-center">
    <div class="flex flex-row space-x-2 items-center">
      <button
        class="p-2 justify-center items-center h-3 w-3 rounded"
        :style="{ backgroundColor: props.bgcolor }"
      ></button>
      <p class="text-[#1F2937] text-base font-normal">
        {{ props.text }}
      </p>
    </div>
    <p class="text-[#1F2937] text-base font-semibold">65%</p>
  </div>
</template>
<script setup>
const props = defineProps(['text', 'bgcolor'])
</script>
