<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { Action, Getter, State } from 'vuex-class'

@Component
export default class extends Vue {
  drawer = false
  items = [
    {
      icon: 'home',
      title: 'Home',
      link: '/'
    },
    {
      icon: 'description',
      title: 'Blog',
      link: '/blog'
    },
    {
      icon: 'mail',
      title: 'Contact',
      link: '/contact'
    }
  ]
}
</script>


<template>
  <v-app>
    <v-navigation-drawer
      clipped
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile
          v-for="(item, index) in items"
          :key="index"
          :to="item.link"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      fixed
      clipped-left
      dark
      class="primary"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <nuxt-link
          to="/"
          class="title-link"
        >
          Takenaka's Works
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-img :src="'/img/logo.jpeg'" height="56px" width="56px"></v-img>
      </v-toolbar-items>
    </v-toolbar>
    <v-toolbar app></v-toolbar>
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<style lang="scss">
.title-link {
  text-decoration: none;
  color: white;
}
.v-toolbar__content, .v-toolbar__extension {
  padding-right: 0;
}
</style>
