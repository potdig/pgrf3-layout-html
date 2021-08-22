import testData from './test-data/tweet.js'
export default {
  state: () => ({
    tweet: testData
  }),
  getters: {
    tweet: ({ tweet }) => tweet
  },
  mutations: {
    setTweet (state, tweet) {
      state = tweet
    }
  },
  actions: {
    setTweet ({ commit }, tweet) {
      commit('setTweet', tweet)
    }
  }
}