import testData from './test-data/timer.js'
export default {
  state: () => ({
    timer: testData.time,
    status: testData.status,
    split: testData.split
  })
}