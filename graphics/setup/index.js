import { createApp } from 'vue'
import Setup from '../../src/Setup.vue'
import store from '../../src/store/index.js'

createApp(Setup).use(store).mount('#root')
