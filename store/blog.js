export const state = () => ({
  article: null,
  articles: [],
  wordpressAPI: 'http://localhost/xnuxt/wp-json'
})

export const mutations = {
  addPost( state, post ) {
    state.posts.push(post)
  },
}

export const actions = {}

export const getters = {}
