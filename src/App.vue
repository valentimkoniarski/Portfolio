<template>
  <v-app :theme="theme">



    <Header />


    <v-main>
      <v-container>
        <router-view />
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

<style>
::-webkit-scrollbar {
  width: .60rem;
  background-color: #B388FF;
}

::-webkit-scrollbar-thumb {
  background-color: #D1C4E9;
  border-radius: .5rem;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #EDE7F6;
}


</style>
