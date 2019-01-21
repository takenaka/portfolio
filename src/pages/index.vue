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
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div class="text-xs-center">
        <v-avatar
          color="grey lighten-4"
          size="256px"
        >
          <img
            src="/img/logo.jpeg"
            alt="avatar"
          >
        </v-avatar>
        <v-card class="mt-4 pa-2">
          <v-card-text>
            <div
              v-for="(profile, index) in profiles"
              :key="index"
            >
              <v-text-field
                readonly
                :label="profile.title"
                v-model="profile.content"
              ></v-text-field>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn fab small color="primary" href="https://twitter.com/y_takenyaka">
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-flex>
  </v-layout>
</template>
