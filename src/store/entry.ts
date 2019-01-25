import Vue from 'vue'
import { createClient, Entry } from 'contentful'
import { MutationTree, ActionTree, GetterTree } from 'vuex'
import marked from 'marked'
import Axios from 'axios'
import Embed from '@/plugins/embed'

export interface IState {
  entry: Entry<any> | {}
}

export const state = (): IState => ({
  entry: {}
})

export const getters: GetterTree<IState, any> = {
  async getApiKey(this: Vue) {
    try {
      const source = await Axios.get<string>(
        'https://cdn.embedly.com/widgets/platform.js'
      )
      const key = source.data.match(/\.EMB_API_KEY="([^"]*)"/)

      return key ? key[1] : ''
    } catch (error) {
      return false
    }
  }
}

export const mutations: MutationTree<IState> = {
  SET_ENTRY: (state, value: Entry<{}>) => {
    state.entry = value
  },
  SET_BODY: (state, value: string) => {
    const entry = state.entry as Entry<any>;
    entry.fields.body = value;
  }
}

export const actions: ActionTree<IState, any> = {
  async getEntry(this: Vue, { commit, getters }, permalink: string) {
    try {
      const client = createClient({
        space: process.env.CTF_SPACE_ID ? process.env.CTF_SPACE_ID : '',
        accessToken: process.env.CTF_CDA_ACCESS_TOKEN
          ? process.env.CTF_CDA_ACCESS_TOKEN
          : ''
      })

      const response = await client.getEntries({
        content_type: process.env.CTF_CONTENT_TYPE,
        'fields.permalink': permalink
      })

      const entry = response.items[0] as Entry<any>

      let text = ''

      if (entry.fields && entry.fields.body) {
        const body = entry.fields.body
        text = body
      }

      const html = marked(text)
      entry.fields.body = html

      commit('SET_ENTRY', entry)

      return true
    } catch {
      return false
    }
  },
  setBody(this: Vue, {commit}, html: string) {
    commit('SET_BODY', html);

    return true;
  }
}
