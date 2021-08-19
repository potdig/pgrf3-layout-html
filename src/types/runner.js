class Participant {
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

export { Participant }