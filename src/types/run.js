import { DateTime } from 'luxon'

const parsingFormat = 'yyyy/MM/dd HH:mm:ss'
const formatOnSchedule = 'HH:mm'

class Run {
  constructor(run) {
    this.title = run.title
    this.category = run.category
    this.platform = run.platform
    this.startsAt = DateTime.fromFormat(run.startsAt, parsingFormat)
    this.est = run.est
    this.runners = run.runners.map(runner => new Runner(runner))
    this.commentators = run.commentators
  }

  joinedRunnerNames(delimiter = ' / ') {
    return this.runners
      .map(runner => runner.name)
      .join(delimiter)
  }

  joinedCommentatorNames(delimiter = ' / ') {
    return this.commentators
      .map(commentator => commentator.name)
      .join(delimiter)
  }

  startsAtOnSchedule() {
    return this.startsAt.toFormat(formatOnSchedule)
  }
}

class Runner {
  constructor(runner) {
    this.id = runner.id
    this.name = runner.name
    this.accounts = runner.accounts
    this.accountTypes = Object.keys(runner.accounts)
  }

  currentAccount() {
    return {
      [this.accountTypes[0]]: this.accounts[this.accountTypes[0]]
    }
  }

  rotateAccountTypes() {
    // 2番目以降の配列の後ろに1番目をくっつける
    this.accountTypes = this.accountTypes.slice(1).concat(this.accountTypes[0])
  }
}

export { Run }