import testData from './test-data/timer.js'

export default {
  state: () => ({
    time: testData.time,
    status: testData.status,
    splits: testData.split
  }),
  getters: {
    splitOfId: ({ splits }) => id => {
      const split = splits.find(split => id === split.id)
      return split ? split.time : ''
    }
  },
  mutations: {
    setTimer (state, timer) {
      state.time = timer.time
      state.status = timer.status
      state.splits = timer.split
    }
  },
  actions: {
    setTimer ({ commit }, timer) {
      commit('setTimer', timer)
    }
  }
}