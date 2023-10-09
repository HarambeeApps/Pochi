<template>
  <div class="flex flex-row space-x-2 items-center p-2">
    <!--button class="p-2 justify-center items-center h-3 w-3 rounded" :style="{ backgroundColor: props.bgcolor }">

    </button-->
    <div>
      <div
        :style="{ backgroundColor: props.bgcolor }"
        class="h-8 w-8 flex overflow-hidden text-white items-center justify-center uppercase leading-none align-middle relative z-0 rounded-full"
      >
        <span>d</span>
      </div>
    </div>
    <p class="text-[#6D788C] text-sm leading-6 font-normal">
      {{ props.text }}
    </p>
  </div>
</template>
<script setup>
const props = defineProps(['text', 'bgcolor'])
</script>
