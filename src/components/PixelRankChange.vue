<template>
  <span class="box green-box" v-if="this.params.value > 0"
    >{{ this.params.value }}%</span
  >
  <span class="box red-box" v-else-if="this.params.value < 0"
    >{{ this.params.value }}%</span
  >
  <span class="box" v-else>{{ this.params.value }}</span>
</template>

<script>
export default {
  name: "PixelRankChange",
};
</script>
