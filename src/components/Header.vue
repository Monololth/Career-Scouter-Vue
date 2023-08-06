<script setup>
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
import Themer from "@/components/ThemeToggler.vue";
</script>

<template>
    <div class="container">
      <div class="logo">
        <img src="/career_logo_alt_1.png" class="headerlogo"/>
      </div>
      <div class="title">
      </div>
      <div class="navigation_bar">
        <RouterLink to="/">{{ $t("nav.home") }}</RouterLink>
        <RouterLink to="/career">{{ $t("nav.career") }}</RouterLink>
        <RouterLink to="/quiz">{{ $t("nav.quiz") }}</RouterLink>
        <RouterLink to="/result">{{ $t("nav.result") }}</RouterLink>
        <RouterLink to="/gdpr">GDPR</RouterLink>
        <div class="switch">
          <LanguageSwitcher class="langs"></LanguageSwitcher>
        </div>
          <Themer></Themer>
      </div>
    </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem;
  position: sticky;
  font-family: Montserrat;
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: var(--navbar-background-color);
  height: 100px;
  @media (max-width: 1400px) {
  }
}

.navigation_bar {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  text-transform: uppercase;
}

.navigation_bar a,
.navigation_bar div {
  margin: 0 1rem;
  color: var(--navbar-text-color);
  text-decoration: none;
  font-family: Montserrat;
  transition: color 0.3s ease;
  padding: 10px;
  cursor: pointer;
  @media (max-width: 1500px) {
    margin: 0 0.25rem;
  }
}

.navigation_bar a:hover,
.navigation_bar div:hover {
  color: var(--navbar-text-color);
  background-color: var(--navbar-block-color);
}

.navigation_bar a:active {
  color: var(--color-box1);
}

.headerlogo {
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  height: 100px;
}

.title {
  color: var(--navbar-text-color);
  font-size: 1.2rem;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1.8px;
}

select {
  margin-left: 1rem;
  padding: 0.5rem;
  border: solid 1px;
  border-radius: 4px;
  color: var(--input-text-color);
  background-color: var(--lang-switcher-bg-color);
}

select option {
  background-color: white;
  color: black;
}

.themeselector {
  padding: 0;
  border: solid 1px;
}

@media (max-width: 1200px) {
  .navigation_bar a,
  .navigation_bar div {
    margin: 0;
    color: var(--navbar-text-color);
    font-family: Montserrat;
    text-decoration: none;
    transition: color 0.3s ease;
    font-size: 16px;
    padding: 5px;
    cursor: pointer;
  }
}

.utils {
  display: flex;
  justify-content: flex-end;
  margin-right: 2.5rem;
}


@media (max-width: 950px) {
  .container {
    width: 100%;
    height: 21rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .headerlogo {
    height: 80px;
    margin: 0;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .logo {
    margin-top: 10px;
  }

  .title {
    display: none;
    color: var(--color-text-color);
    padding-right: 0;
    text-align: center;
    align-items: center;
    justify-content: center;
  }

  .navigation_bar {
    font-weight: 900;
    font-size: 12px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .navigation_bar div {
    margin: 0;
    color: var(--navbar-text-color);
    text-decoration: none;
    transition: color 0.3s ease;
    padding: 8px;
    cursor: pointer;
  }
  select {
    margin-left: 0;
    padding: 0;
    border: none;
    border-radius: 4px;
    color: var(--input-text-color);
  }
}
</style>
