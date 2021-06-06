import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    packages: [],
    currentPackage: {
      name: '',
      author: {
        name: ''
      },
      links: [],
      version: ''
    },
    isModalOpen: false
  },
  mutations: {
    SET_PACKAGES(state, payload) {
      state.packages = payload
    },
    SET_PACKAGE(state, payload) {
      state.currentPackage = payload
    },
    TOGGLE_MODAL(state, payload) {
      state.isModalOpen = payload
    }
  },
  actions: {
    async doSearch({ commit }, { packageName }) {
      try {
        const response = await fetch(`http://registry.npmjs.com/-/v1/search?text=${packageName}`)
        if (response.ok) {
          let json = await response.json();
          commit('SET_PACKAGES', json.objects)
        }
      } catch (e) {
        console.log("Ошибка HTTP: " + e);
      }
    },
    openPackageDetails({ commit, getters }, { packageName }) {
      const res = getters.getPackageDetails(packageName)
      commit('SET_PACKAGE', res.package)
      commit('TOGGLE_MODAL', true)
    }
  },
  getters: {
    getPackageDetails: (state) => (name) => {
      return state.packages.find(v => v.package.name === name)
    }
  }
});
