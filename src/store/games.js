import testData from './test-data/games.js'
import { Run } from '../types/run.js'

export default {
  state: () => ({
    games: testData
  }),
  getters: {
    runsOnSchedule ({ games }) {
      return games.slice(0, 3).map(game => new Run(game))
    }
  }
}