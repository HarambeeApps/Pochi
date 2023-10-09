<template>
  <div
    class="flex rounded-2xl px-3 items-center justify-center"
    :style="{ backgroundColor: props.bgcolor }"
  >
    <p class="text-sm leading-6 font-normal" :style="{ color: props.textcolor }">
      {{ props.status }}
    </p>
  </div>
</template>
<script setup>
const props = defineProps(['bgcolor', 'status', 'textcolor'])
</script>
