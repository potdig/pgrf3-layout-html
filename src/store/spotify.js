import testData from './test-data/spotify.js'
export default {
  state: () => ({
    title: testData.title,
    artist: testData.artist
  }),
  mutations: {
    setMusic (state, music) {
      state.title = music.title
      state.artist = music.artist
    }
  },
  actions: {
    setMusic ({ commit }, music) {
      commit('setMusic', music)
    }
  }
}