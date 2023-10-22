<template>
  <v-app :theme="theme">
    <Header/>
    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>

import Header from '@/components/header/Header.vue'

import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore();

const theme = computed(() => store.getters['getTheme']);

</script>

