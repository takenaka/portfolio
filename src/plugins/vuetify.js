import Vue from 'vue'
import Vuetify from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify, {
  theme: {
    primary: '#299DCB', // a color that is not in the material colors palette
    accent: '#6A7FDB',
    secondary: '#45CB85',
    info: '#6DD6DA',
    warning: 'F7EE7F',
    error: '#E08DAC',
    success: '#57E2E5'
  }
})
