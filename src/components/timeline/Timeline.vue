<template>
  <div class="timeline mt-10">
    <h5 class="text-h5 text-uppercase text-center text-deep-purple-accent-1">Education & work</h5>
    <v-timeline class="mt-5">
      <v-timeline-item v-for="timeline in timelines" :key="timeline.id" :dot-color="timeline.color"
                       :icon="timeline.icon" size="large">
        <template v-slot:opposite>
          <div :class="`pt-1 headline font-weight-bold text-button text-${timeline.color}`"
               v-text="timeline.period"></div>
        </template>
        <div>
          <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${timeline.color}`">{{ timeline.title }}</h2>
          <h5 :class="`text-button text-${timeline.color}`">{{ timeline.position }}</h5>
          <span class="text-subtitle-2" v-html="timeline.description"></span>

          <div v-if="timeline.techlist" class="mt-5">
            <h5 class="text-button text-amber darken-1">Techlist</h5>
            <div class="d-flex flex-wrap">
              <v-chip class="mr-2 mb-2" v-for="(tech, i) in timeline.techlist" :key="i" text-color="white" small>
                <span class="text-subtitle-2">{{ tech }}</span>
              </v-chip>
            </div>
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script setup>
import { defineComponent, reactive } from 'vue';

defineComponent({
  name: 'Timelines'
})

const timelines = reactive([
  {
    id: 0,
    icon: 'mdi-book-education',
    color: 'cyan lighten-1',
    title: 'UNISATC',
    position: 'Computer Engineer',
    period: 'JAN 2019 — DEC 2024',
    description: 'Bachelor of Computer Engineer'
  },
  {
    id: 1,
    icon: 'mdi-briefcase-variant',
    color: 'amber darken-1',
    title: 'Setep Construções',
    position: 'Trainee',
    period: 'FEV 2021 — APR 2022',
    description: 'Building and enhancing web systems.',
    techlist: ['PHP', 'RedBean ORM', 'JQuery', 'PostgreSQL']
  },
  {
    id: 2,
    icon: 'mdi-briefcase-variant',
    color: 'blue-darken-3',
    title: 'Betha Sistemas',
    position: 'Developer',
    period: 'APR 2022 — NOWADAYS',
    description: '' +
        '<p> Working at the inspection management system, with microservices based in Java, using Spring Boot with ' +
        'messaging for services communication, JPA with Hibernate and Querydsl and unit testing with JUnit; </p><br>' +
        '<p> Frontend development component based with Angular.JS, VueJS and Javascript ECMA 6; </p>',
    techlist: ['Java', 'Spring boot', 'Hibernate', 'Vue.js', 'AngularJS', 'Mockito', 'JUnit', 'PostgreSQL']
  }
])
</script>
