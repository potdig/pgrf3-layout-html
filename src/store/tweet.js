import testData from './test-data/tweet.js'
export default {
  state: () => ({
    id: testData.id,
    icon: testData.icon,
    content: testData.content
  })
}