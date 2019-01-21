<script lang="ts">
import { Component, Prop, Vue, Watch } from 'nuxt-property-decorator'
import { Action, Getter, State } from 'vuex-class'
import { NuxtContext } from '@/@types/nuxt';
import { IState } from '@/store/entries';

@Component
export default class extends Vue {
  @State('entries') entries: IState;

  async fetch({ store }) {
    await store.dispatch('entries/getEntries');
  }
}
</script>

<template>
  <div>
    <v-layout row wrap>
      <v-flex :key="i" class="ma-4" v-for="(item,  i) in entries.entries.items">
        <v-hover>
          <v-card :class="`elevation-${hover ? 12 : 2}`" slot-scope="{ hover }">
            <v-img :src="'https:' + item.fields.headerImage.fields.file.url" height="200"></v-img>
            <v-card-title>
              <h3>{{item.fields.title}}</h3>
            </v-card-title>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
  </div>
</template>
