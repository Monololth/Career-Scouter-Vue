<script setup></script>

<template>
  <div class="welcome">
    <h1>{{ $t("thewelcome.heading") }}</h1>
    <p>{{ $t("thewelcome.title") }}</p>
    <h3>{{ $t("thewelcome.heading1") }}</h3>
    <p>{{ $t("thewelcome.description1") }}</p>
    <h3>{{ $t("thewelcome.heading2") }}</h3>
    <p>{{ $t("thewelcome.description2") }}</p>
    <h3>{{ $t("thewelcome.heading3") }}</h3>
    <p>{{ $t("thewelcome.description3") }}</p>
    <h3>{{ $t("thewelcome.heading4") }}</h3>
    <p>{{ $t("thewelcome.description4") }}</p>
    <h3>{{ $t("thewelcome.heading5") }}</h3>
    <p>{{ $t("thewelcome.description5") }}</p>
    <h3>{{ $t("thewelcome.heading6") }}</h3>
    <p>{{ $t("thewelcome.description6") }}</p>
    <h3>{{ $t("thewelcome.heading7") }}</h3>
    <p>{{ $t("thewelcome.description7") }}</p>
    <h3>{{ $t("thewelcome.heading8") }}</h3>
    <p>{{ $t("thewelcome.description8") }}</p>
    <h3>{{ $t("thewelcome.heading9") }}</h3>
    <p>{{ $t("thewelcome.description9") }}</p>
    <h3>{{ $t("thewelcome.heading10") }}</h3>
    <p>{{ $t("thewelcome.description10") }}</p>

    <p>{{ $t("thewelcome.description11") }}</p>
  </div>
</template>

<style scoped>
.welcome {
  font-family: Montserrat, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 80%;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

h3 {
  margin-bottom: 0;
}

p {
  margin-top: 0;
}
</style>
