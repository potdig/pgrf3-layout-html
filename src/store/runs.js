import testData from './test-data/runs.js'
import { Run } from '../types/run.js'
import { Participant } from '../types/runner.js'

export default {
  state: () => ({
    runs: testData,
    currentRunners: testData[0].runners
      .map(runner => new Participant(runner)),
    currentCommentators: testData[0].commentators
      .map(commentator => new Participant(commentator))
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
    rotateAccounts ({ currentRunners, currentCommentators }) {
      currentRunners.forEach(runner => {
        runner.rotateAccountTypes()
      })
      currentCommentators.forEach(commentator => {
        commentator.rotateAccountTypes()
      })
    }
  }
}