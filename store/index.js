import Vuex from "vuex";

const createStore = () => {
	return new Vuex.Store({
		state: {
      langs: [
        { short: 'es', long: 'Español'},
      ],
      language: 'es',
      article: null,
      articles: [],
      totalArticles: null,
      totalPages: null,
      wordpressAPI: 'http://ebadia.com/proyectos/xnuxt/wp-json'
    },

		mutations: {
		  setLanguage (state, lang) {
        state.language = lang
      },
      setArticle (state, data) {
        state.article = data
      },
      setArticles (state, data) {
        state.articles = data
      },
      setTotalArticles (state, data) {
        state.totalArticles = data
      },
      setTotalPages (state, data) {
        state.totalPages = data
      },
      setArticles (state, data) {
        state.articles = state.articles.concat(data)
      },
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
