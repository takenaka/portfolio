<script lang="ts">
import { Component, Prop, Vue, Watch } from 'nuxt-property-decorator'
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
    <v-toolbar
      app
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
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list class="mt-2">
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
    <v-content>
      <v-container fluid>
        <v-fade-transition hide-on-leave>
          <router-view />
        </v-fade-transition>
      </v-container>
    </v-content>
    <!-- <v-footer
      app
      class="pa-3"
    >
      <v-spacer></v-spacer>
      <div class="caption">&copy; {{ new Date().getFullYear() }} - Yuki Takenaka</div>
    </v-footer> -->
  </v-app>
</template>

<style lang="scss">
.title-link {
  text-decoration: none;
  color: white;
}
.v-toolbar__content,
.v-toolbar__extension {
  padding-right: 0;
}
nav {
  background: linear-gradient(-135deg, #6dd6da, #299dcb);
}
</style>
