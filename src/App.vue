<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Nav from './components/Navbar.vue'
import Heading from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="wrapper">
    <div class="header">
      <Heading></Heading>
    </div>
    <div class="content">
      <RouterView />
    </div>
    <div class="footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<style scoped>

/* App related CSS settings are in main.css! */

.header {
  width: 100%;
}

.wrapper{
  width: 100%;
  align-items: center;
}

.content {
  width: 100%;
  min-height: 1024px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-align: center;
}

@media (max-width: 950px) {
    .header {
      width: 100%;
  }

  .wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .content {
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .footer {
    width: 100%;
    max-width: 100%;
  }
}
</style>