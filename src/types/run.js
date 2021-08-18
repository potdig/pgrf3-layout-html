class Run {
  constructor(run) {
    this.title = run.title
    this.category = run.category
    this.platform = run.platform
    this.startsAt = run.startsAt
    this.est = run.est
    this.runners = run.runners
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
}

export { Run }