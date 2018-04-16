import Vuex from "vuex";

const createStore = () => {
	return new Vuex.Store({
		state: {
      langs: [
        { short: 'es', long: 'Español'},
      ],
      language: 'es'
    },

		mutations: {
		  setLanguage (state, lang) {
        state.language = lang
      }
    },

		actions: {
			nuxtServerInit(nuxtContext, context) {},

      changeLanguage (context, lang) {
			  context.commit('setLanguage', lang)
      }
		},

		getters: {
		  getLanguages (state) {
		    return state.langs
      },
		  getLang (state) {
		    return state.language
      }
    }
	});
};

export default createStore;
