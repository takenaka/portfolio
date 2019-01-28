<script lang="ts">
import { Component, Prop, Vue, Watch } from 'nuxt-property-decorator'
import { Action, Getter, State } from 'vuex-class'
import { NuxtContext } from '@/@types/nuxt';
import { IState } from '@/store/entry';
import { Entry } from 'contentful';

@Component
export default class extends Vue {
  @State('entry') entry: IState;

  async fetch({ store, params }) {
    await store.dispatch('entry/getEntry', params.permalink);
  }
}
</script>

<template>
  <v-layout align-center justify-center wrap>
    <v-flex md8 sm12>
      <v-img :src="`https:${entry.entry.fields.headerImage.fields.file.url}`"></v-img>
      <h1 class="entry-title">{{ entry.entry.fields.title }}</h1>

      <v-divider class="mb-5"></v-divider>

      <div class="entry-body" v-html="entry.entry.fields.body">
      </div>
    </v-flex>
  </v-layout>
</template>

<style lang="scss" src="@/assets/style/style.scss"></style>

<style lang="scss" scoped>
.entry-title {
  word-break: break-all;
}
.entry-body {
  word-break: break-all;
}
</style>
