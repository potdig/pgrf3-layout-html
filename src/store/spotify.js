import testData from './test-data/spotify.js'
export default {
  state: () => ({
    title: testData.title,
    artist: testData.artist
  })
}