import testData from './test-data/runs.js'
import { Run } from '../types/run.js'

export default {
  state: () => ({
    runs: testData
  }),
  getters: {
    runsOnSchedule ({ runs }) {
      return runs.slice(0, 3).map(run => new Run(run))
    }
  }
}