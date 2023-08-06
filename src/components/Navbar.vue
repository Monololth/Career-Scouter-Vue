<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="navigation_bar">
    <div class="routes">
      <RouterLink to="/"
        ><strong>{{ $t("nav.home") }}</strong></RouterLink
      >
      <RouterLink to="/career"
        ><strong>{{ $t("nav.career") }}</strong></RouterLink
      >
      <RouterLink to="/quiz"
        ><strong>{{ $t("nav.quiz") }}</strong></RouterLink
      >
      <RouterLink to="/result"
        ><strong>{{ $t("nav.result") }}</strong></RouterLink
      >
      <RouterLink to="/gdpr"><strong>GDPR</strong></RouterLink>
    </div>
    <div class="switch">
      <LanguageSwitcher class="langs"></LanguageSwitcher>
    </div>
  </div>
</template>

<script>
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
export default {
  components: { LanguageSwitcher },
};
</script>

<style scoped>
.navigation_bar {
  font-weight: 900;
  font-size: 16px;
  font-weight: 900;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.routes {
  float: left;
}

.switch {
  float: right;
}

.navigation_bar a.router-link-exact-active {
  color: var(--color-text-white);
  font-weight: 900;
}

.navigation_bar a.router-link-exact-active:hover {
  color: var(--color-text-white);
  font-weight: 900;
  background-color: transparent;
}

.navigation_bar a {
  color: var(--color-text-color);
  font-weight: 900;
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

.navigation_bar a:first-of-type {
  color: var(--color-text-color);
  font-weight: 900;
  border: 0;
}

.langs {
  margin-left: 1rem;
  padding: 0.25rem;
}

@media (max-width: 950px) {
  .navigation_bar {
    font-weight: 900;
    width: 80vw;
    font-size: 12px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .routes {
    display: flex;
    flex-direction: column;
  }

  .langs {
    padding: 0;
  }
}
</style>
