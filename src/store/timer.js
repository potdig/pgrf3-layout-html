import testData from './test-data/timer.js'
export default {
  state: () => ({
    time: testData.time,
    status: testData.status,
    split: testData.split
  })
}