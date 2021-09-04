import testData from './test-data/spotify.js'
export default {
  state: () => ({
    title: testData.title,
    artist: testData.artist
  }),
  getters: {
    shortSpotifyInfo({ title, artist}) {
      const wholeInfo = `${title} / ${artist}`
      if (wholeInfo.length > 80) {
        return `${wholeInfo.substring(0, 80)}...`
      } else {
        return wholeInfo
      }
    }
  },
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