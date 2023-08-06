<script setup>
import { ref, onMounted } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
const isDark = ref(false);

const toggleTheme = () => {
  document.body.classList.toggle("dark");
  isDark.value = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark.value ? "dark" : "light"); // Store the theme state
};
const sunIcon = faSun;
const moonIcon = faMoon;

const setTheme = () => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark");
    isDark.value = true;
  } else {
    document.body.classList.remove("dark");
    isDark.value = false;
  }
};
onMounted(setTheme);
</script>

<template>
    <div class="utils">
        <div class="theme-toggle" :class="{ dark: isDark }" @click="toggleTheme" tabindex="0" @keydown.enter="toggleTheme">
            <div class="toggle-ball" :class="{ active: isDark }">
                <font-awesome-icon :icon="isDark ? moonIcon : sunIcon" v-bind:class="{ 'icon-dark': isDark, 'icon-light': !isDark }"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
.utils {
  display: flex;
  justify-content: flex-end;
}

.theme-toggle {
    display: flex;
    padding: 0.5rem;
    width: 4rem;
    align-items: center;
    justify-content: center;
    border: solid 1px;
    border-radius: 4px;
    color: var(--input-text-color);
    background-color: var(--lang-switcher-bg-color);
}

.icon-dark {
  color: var(--navbar-text-color);
}

.icon-light {
  color: var(--navbar-text-color);
}

</style>