export const state = () => ({
  posts: []
})
export const mutations = {
  addPost( state, post ) {
    state.posts.push(post)
  },
}
export const actions = {}
export const getters = {}
