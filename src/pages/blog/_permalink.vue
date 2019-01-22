<script lang="ts">
import { Component, Prop, Vue, Watch } from 'nuxt-property-decorator'
import { Action, Getter, State } from 'vuex-class'
import { NuxtContext } from '@/@types/nuxt';
import { IState } from '@/store/entry';

@Component
export default class extends Vue {
  @State('entry') entry: IState;
  @Getter('entry/getBody') getBody: string;

  async fetch({ store, params }) {
    await store.dispatch('entry/getEntry', params.permalink);
  }
}
</script>

<template>
  <v-layout justify-center align-center wrap>
    <v-flex sm12 md8>
      <div class="article-body" v-html="getBody"></div>
    </v-flex>
  </v-layout>
</template>

<style lang="scss" scoped>
.article-body {
  word-wrap: 'break-word';
  width: 100%;
  overflow: hidden;
}
</style>
