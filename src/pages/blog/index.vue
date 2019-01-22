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
      <v-flex xs12 sm6 md4 :key="i" v-for="(item,  i) in entries.entries.items">
        <v-card hover class="ma-3" :to="`./blog/${item.fields.permalink}`">
          <v-img :src="`https:${item.fields.headerImage.fields.file.url}`" height="200">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex align-end flexbox xs12>
                  <span class="white--text">{{ item.sys.updatedAt.split('T')[0] }}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>
            <span class="item-title">{{item.fields.title}}</span>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<style lang="scss" scoped>
.item-title {
  word-wrap: break-word;
  max-width: 100%;
}
</style>
