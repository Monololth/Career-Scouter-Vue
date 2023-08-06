<script setup>
import CareerData from "../components/CareerData.vue";
</script>

<template>
  <div class="career">
    <CareerData />
  </div>
</template>

<style scoped>
.career {
  width: 100%;
  min-height: 1024px;
}
@media (max-width: 950px) {
  .career {
    align-items: center;
    justify-content: center;
  }
}
</style>
