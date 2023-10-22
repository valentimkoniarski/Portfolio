<template>
  <v-container>
    <div class="profile">
      <div class="profile__image">
        <v-avatar :size="smAndDown ? 200 : 300">
          <img src="../assets/images/valentim_photo.jpeg" alt="avatar" width="200" style="border-radius: 50%;">
        </v-avatar>
      </div>
      <div class="profile__text">
        <h1 class="text-uppercase font-weight-regular text-deep-purple-accent-1" :class="xs ? 'text-h3' : 'text-h2'">
          Valentim Koniarski</h1>
        <h2 class="text-h5 text-uppercase font-weight-light mt-5 text-deep-purple-lighten-1">Full-stack web
          developer</h2>
      </div>
    </div>
    <div class="block">
      <div class="block__row" :class="mdAndDown ? 'flex-column' : undefined">
        <div class="block__element block__element-1" :class="xs ? 'flex-column' : undefined">
          <personal-info/>
        </div>


        <div class="block__element block__element-2">
          <projects/>
          <timeline/>
        </div>
      </div>
    </div>
  </v-container>
</template>
<script lang="ts" setup>
import {defineComponent} from 'vue'
import PersonalInfo from '@/components/personalInfo/PersonalInfo.vue'
import Timeline from '@/components/timeline/Timeline.vue'
import Projects from '@/components/projects/Projects.vue'

import {useDisplay} from "vuetify";

const {xs, sm, smAndDown, md, mdAndDown} = useDisplay()


</script>


<style scoped>

.profile {
  border-radius: 50%;
  display: flex;
}

.profile__image, .profile__text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.block {
  margin-top: 50px;
}

.block__row {
  display: flex;
}

@media (max-width: 767px) {
  .profile {
    flex-direction: column;
  }

  .profile__image, .profile__text {
    align-items: center;
  }

  h1, h2 {
    text-align: center;
  }
}

@media (min-width: 768px) {
  .profile__text {
    margin-left: 50px;
  }
}

@media (min-width: 992px) {
  .block__element-1 {
    flex: 0 0 300px;
    margin-right: 20px;
  }

  .block__element-2 {
    flex: 1 1 auto;
    margin-left: 20px;
  }
}

@media (max-width: 991px) {
  .block__element-1 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}

@media (min-width: 1920px) {
  .v-container {
    max-width: 1200px;
  }
}

</style>
