<template>
  <div>
    <button
      :style="{ backgroundColor: bgColor || 'transparent' }"
      class="py-1 px-4 rounded-lg border border-[#F2F8FF] text-[#1C3680]"
    >
      {{ props.text }}
    </button>
  </div>
</template>
<script setup>
const props = defineProps(['text', 'bgColor'])
</script>
