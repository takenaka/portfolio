import Vue from 'vue';
import { createClient, Entry } from 'contentful'
import { MutationTree, ActionTree } from 'vuex'

export interface IState {
  entry: Entry<{}> | {}
}

export const state = (): IState => ({
  entry: {}
})

export const mutations: MutationTree<IState> = {
  SET_ENTRY: (state, value: Entry<{}>) => {
    state.entry = value
  }
}

export const actions: ActionTree<IState, any> = {
  async getEntry(this: Vue, { commit, rootState }, data: {
    id: string
  }) {
    try {
      const client = createClient({
        space: process.env.CTF_SPACE_ID ? process.env.CTF_SPACE_ID : '',
        accessToken: process.env.CTF_CDA_ACCESS_TOKEN
          ? process.env.CTF_CDA_ACCESS_TOKEN
          : ''
      })

      const response = await client.getEntry(data.id);

      commit('SET_ENTRY', response)

      return true
    } catch {
      false
    }
  }
}
