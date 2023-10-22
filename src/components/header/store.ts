import {createStore, Store, MutationTree} from 'vuex';

interface RootState {
  theme: string
}

const mutations: MutationTree<RootState> = {
  toggleTheme(state: RootState): void {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', state.theme)
  },
  setTheme(state: RootState, theme: string): void {
    state.theme = theme
    localStorage.setItem('theme', theme)
  }
}

export default createStore({
  state: (): RootState => ({
    theme: 'light',
  }),
  mutations,
  actions: {
    toggleTheme({commit}): void {
      commit('toggleTheme')
    },
    setTheme({commit}, theme: string): void {
      commit('setTheme', theme)
    }
  },
  getters: {
    getTheme: (state: RootState) => {
      return state.theme
    }
  }
}) as Store<RootState>
