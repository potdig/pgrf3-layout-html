import testData from './test-data/runs.js'
import { Run } from '../types/run.js'
import { Runner } from '../types/runner.js'

export default {
  state: () => ({
    runs: testData,
    currentRunners: testData[0].runners.map(runner => new Runner(runner))
  }),
  getters: {
    runsOnSchedule ({ runs }) {
      return runs.slice(0, 3).map(run => new Run(run))
    },
    currentRun ({ runs }) {
      return new Run(runs[0])
    }
  },
  mutations: {
    rotateAccounts ({ currentRunners }) {
      currentRunners.forEach(runner => {
        runner.rotateAccountTypes()
      })
    }
  }
}