import Vue from 'vue'
import { createClient, Entry } from 'contentful'
import { MutationTree, ActionTree, GetterTree } from 'vuex'
import marked from 'marked'

export interface IState {
  entry: Entry<any> | {}
}

export const state = (): IState => ({
  entry: {}
})

export const getters: GetterTree<IState, any> = {
  getBody: state => {
    let text = ''

    const entry = state.entry as Entry<any>
    if (entry.fields && entry.fields.body) {
      const body = entry.fields.body
      text = body
    }

    return marked(text)
  }
}

export const mutations: MutationTree<IState> = {
  SET_ENTRY: (state, value: Entry<{}>) => {
    state.entry = value
  }
}

export const actions: ActionTree<IState, any> = {
  async getEntry(this: Vue, { commit, rootState }, permalink: string) {
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

      commit('SET_ENTRY', response.items[0])

      return true
    } catch {
      return false
    }
  }
}
