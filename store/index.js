import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
	return new Vuex.Store({
		state: {
      langs: [
        { short: 'es', long: 'Español'},
      ],
      language: 'es',
      article: null,
      featuredImage: null,
      articles: [],
      totalArticles: null,
      totalPages: null,
      currentPage: 1,

      totalSaltos: 1,
      salto: 0,
      pagina: 1,
      wordpressAPI: 'https://ebadia.com/proyectos/xnuxt/wp-json'
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
      setCurrentPage (state, data) {
        state.currentPage = data
      },
      setFeaturedImage (state, data) {
        state.featuredImage = data
      },
      setPagina (state, data) {
        state.pagina = data
      },
      setSalto (state, data) {
        state.salto = state.salto + data
      },
      setTotalSaltos (state, data) {
        state.totalSaltos = data
      },
    },

		actions: {
			nuxtServerInit(nuxtContext, context) {},

      changeLanguage (context, lang) {
			  context.commit('setLanguage', lang)
      },

      setArticles ( {commit, state} ) {
        return new Promise( (resolve, reject) => {
          axios.get(
            `${
              state.wordpressAPI
              }/wp/v2/posts?orderby=date&per_page=5&page=${state.pagina}&_embed`
          ).then( articles => {
            const total = articles.headers['x-wp-total'];
            const totalPages = articles.headers['x-wp-totalpages'];

            commit("setArticles", articles.data);
            commit("setTotalArticles", +total);
            commit("setTotalPages", +totalPages);
            commit("setTotalSaltos", Math.floor(+totalPages / 5));

            resolve()
          })
        })
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
