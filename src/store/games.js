import testData from './test-data/games.js'
export default {
  state: () => ({
    games: testData
  }),
  getters: {
    runsOnSchedule ({ games }) {
      return games.slice(0, 3)
    }
  }
}