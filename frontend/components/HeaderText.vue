<template>
  <div class="flex items-center">
    <p class="text-[#4C5463] text-lg leading-6 font-normal">
      {{ props.headertext }}
    </p>
  </div>
</template>
<script setup>
const props = defineProps(['headertext'])
</script>
