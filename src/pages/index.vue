<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { Action, Getter, State } from 'vuex-class'

@Component
export default class extends Vue {
  profiles = [
    {
      title: 'Name',
      content: 'Yuki Takenaka'
    },
    {
      title: 'Age',
      content: '25歳'
    },
    {
      title: 'Job',
      content: 'Webエンジニア'
    }
  ]
}
</script>

<template>
  <v-layout
    column
    justify-center
    align-center>
    <v-flex
      xs12
      sm8
      md6>
      <div class="text-xs-center">
        <v-avatar
          color="grey lighten-4"
          size="256px"
        >
          <img src="/img/logo.jpeg" alt="avatar">
        </v-avatar>
        <div class="profile">
          <div v-for="(profile, index) in profiles" :key="index">
            <p>{{ profile.title }}</p>
          </div>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>
