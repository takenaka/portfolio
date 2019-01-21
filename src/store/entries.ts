import Vue from 'vue';
import { createClient, EntryCollection } from 'contentful'
import { MutationTree, ActionTree } from 'vuex'

export interface IState {
  entries: EntryCollection<{}> | {}
}

export const state = (): IState => ({
  entries: {}
})

export const mutations: MutationTree<IState> = {
  SET_ENTRIES: (state, value: EntryCollection<{}>) => {
    state.entries = value
  }
}

export const actions: ActionTree<IState, any> = {
  async getEntries(this: Vue, { commit }) {
    try {
      const client = createClient({
        space: process.env.CTF_SPACE_ID ? process.env.CTF_SPACE_ID : '',
        accessToken: process.env.CTF_CDA_ACCESS_TOKEN
          ? process.env.CTF_CDA_ACCESS_TOKEN
          : ''
      })

      const response = await client.getEntries()

      commit('SET_ENTRIES', response)
    } catch({ response }) {
      this.app.context.error({
        statusCode: response.status
      });
    }
  }
}
