import testData from './test-data/tweet.js'
export default {
  state: () => ({
    id: testData.id,
    icon: testData.icon,
    content: testData.content
  }),
  mutations: {
    setTweet (state, tweet) {
      state.id = tweet ? tweet.id : null
      state.icon = tweet ? tweet.icon : null
      state.content = tweet ? tweet.content : null
    }
  },
  actions: {
    setTweet ({ commit }, tweet) {
      commit('setTweet', tweet)
    }
  }
}