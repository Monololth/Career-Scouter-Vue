
<template>
  <select @change="switchLanguage">
    <option
      v-for="sLocale in supportedLocales"
      :key="`locale-${sLocale}`"
      :value="sLocale"
      :selected="locale === sLocale"
    >
      {{ t(`locale.${sLocale}`) }}
    </option>
  </select>
</template>


<script>
  import { useI18n } from 'vue-i18n'
  import Tr from "@/i18n/translation"
  export default {
    setup() {
      const { t, locale } = useI18n()
      const supportedLocales = Tr.supportedLocales
      const switchLanguage = async (event) => {
        const newLocale = event.target.value
        await Tr.switchLanguage(newLocale)
      }
      return { t, locale, supportedLocales, switchLanguage }
    }
  }
</script>

<style scoped>

select {
  background-color: transparent;
  color: var(--lang-navbar-text-color);
  padding: 12px 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  font-family: Montserrat;
  font-weight: 500;
  text-transform: uppercase;
}
</style>