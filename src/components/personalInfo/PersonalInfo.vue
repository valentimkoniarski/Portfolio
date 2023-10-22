<template>
  <div>
    <h5 class="text-h5 text-uppercase text-deep-purple-accent-1">Personal Info</h5>
    <div class="personal-info__item mt-3" v-for="(item, i) in personalInfoData" :key="i">
      <div class="personal-info__icon">
        <v-icon size="x-large">{{ item.icon }}</v-icon>
      </div>
      <div class="personal-info__content">
        <span class="text-uppercase text-button">{{ item.title }}</span>
        <span class="font-weight-light">{{ item.value }}</span>
      </div>
    </div>
  </div>
  <div class="mt-10">
    <h5 class="text-h5 text-uppercase text-deep-purple-accent-1">Contact Info</h5>
    <div class="contact-info__item mt-3" v-for="(item, i) in contantInfoData" :key="i">
      <div class="contact-info__icon">
        <v-icon size="x-large">{{ item.icon }}</v-icon>
      </div>
      <div class="contact-info__content">
        <span class="text-uppercase text-button">{{ item.title }}</span>
        <a :href="item.href || ''" :target="item.target || '_blank'">{{ item.value || '' }}</a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent, reactive} from 'vue'

export default defineComponent({
  name: "PersonalInfo",
  setup(props) {
    return {
      personalInfoData: personalInfoData,
      contantInfoData: contantInfoData,
    }
  }
})

const personalInfoData = reactive([
  {
    icon: 'mdi-calendar-account',
    title: 'Birth date',
    value: '10 December, 2000'
  },
  {
    icon: 'mdi-compass-rose',
    title: 'Location',
    value: 'Criciúma/SC, Brazil'
  },
])

const contantInfoData = reactive([
  {
    icon: 'mdi-cellphone-sound',
    title: 'Phone',
    value: '+ 55 (48) 99227-9877',
    href: 'tel:+5548996279877',
    target: null,
  },
  {
    icon: 'mdi-message-text',
    title: 'WhatsApp',
    value: '@valentimkoniarski',
    href: 'https://api.whatsapp.com/send?phone=5548996279877',
    target: '_blank',
  },
  {
    icon: 'mdi-gmail',
    title: 'Gmail',
    value: 'valentim0213@gmail.com',
    href: 'mailto:valentim0213@gmail.com',
    target: null,
  },
  {
    icon: 'mdi-github',
    title: 'GitHub',
    value: 'valentimkoniarski',
    href: 'https://github.com/valentimkoniarski',
    target: '_blank',
  },
  {
    icon: 'mdi-linkedin',
    title: 'LinkedIn',
    value: 'valentimkoniarski',
    href: 'https://www.linkedin.com/in/valentim-koniarski-7417ba221/',
    target: '_blank',
  },
])



</script>


<style scoped>
.personal-info__item {
  display: flex;
  align-items: flex-end;
}

.personal-info__content {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}

.contact-info__item {
  display: flex;
  align-items: flex-end;
}

.contact-info__content {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
</style>
