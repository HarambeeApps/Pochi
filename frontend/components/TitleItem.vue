<template>
  <div>
    <img src="h-6 w-6" :style="{ src: props.imgurl }" />
    <p class="text-sm leading-6 text-[#6D788C] overflow-ellipsis whitespace-nowrap">
      {{ props.title }}
    </p>
  </div>
</template>
<script setup>
const props = defineProps(['title', 'imgurl'])
</script>
