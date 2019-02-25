<script lang="ts">
import { Component, Prop, Vue, Watch } from 'nuxt-property-decorator'
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
      content: '25'
    },
    {
      title: 'Job',
      content: 'Web Engineer'
    }
  ]
}
</script>

<template>
  <div>
    <v-layout align-center justify-center>
      <v-flex md6 sm8 xs12 class="text-xs-center">
        <v-avatar color="grey lighten-4" size="256px">
          <img alt="avatar" src="/img/logo.jpeg">
        </v-avatar>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center>
      <v-flex md6 sm8 xs12>
        <v-card class="mt-4 pa-2">
          <v-card-text>
            <div :key="index" v-for="(profile, index) in profiles">
              <v-text-field :label="profile.title" readonly v-model="profile.content"></v-text-field>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" fab href="https://twitter.com/y_takenyaka" small>
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
            <v-btn dark color="grey" fab href="https://github.com/takenaka" small>
              <v-icon>mdi-github-circle</v-icon>
            </v-btn>
          </v-card-actions>
          <v-img src="https://grass-graph.moshimo.works/images/takenaka.png"></v-img>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>
