<template>
  <v-app-bar>
    <v-spacer></v-spacer>
    <v-btn :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click="onToggleTheme">
      Toggle Theme
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'
import {useStore} from 'vuex'

function getBrowserTheme() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

onMounted(() => {
  localStorage.hasOwnProperty('theme')
})

function setVariableColor(theme: string) {
  if (theme === 'light') {
    document.documentElement.style.setProperty('--custom-color', '#FFFFFF')
  } else {
    document.documentElement.style.setProperty('--custom-color', '#232323')
  }
}

export default defineComponent({
  name: 'Header',
  setup() {
    const store = useStore()
    const theme = ref(getBrowserTheme())

    onMounted(() => {
      const currentTheme = localStorage.getItem('theme') ?
        localStorage.getItem('theme') : store.getters['getTheme']
      setVariableColor(currentTheme);
      store.commit('setTheme', currentTheme)
    })

    function onToggleTheme() {
      store.commit('toggleTheme')
      const currentTheme = store.getters['getTheme']
      setVariableColor(currentTheme)
    }

    return {
      theme,
      onToggleTheme
    }
  }
})
</script>
