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

  async mounted() {
    const source = await fetch('//cdn.embedly.com/widgets/platform.js', {})
    const s = await source.text()
    const key = s.match(/\.EMB_API_KEY="([^"]*)"/)
    console.log(key![1])
  }
}
</script>

<template>
  <v-layout align-center justify-center wrap>
    <v-flex md8 sm12>
      <h1 class="entry-title">{{ entry.entry.fields.title }}</h1>
      <v-img :src="`https:${entry.entry.fields.headerImage.fields.file.url}`" height="200"></v-img>
      <div class="entry-body" v-html="getBody"></div>
    </v-flex>
  </v-layout>
</template>

<style lang="scss" scoped>
.entry-title {
  word-break: break-all;
}
.entry-body {
  word-wrap: 'break-word';
  width: 100%;
  overflow: hidden;
}
</style>
