import { createApp } from 'vue'
import HDSolo from '../../src/HDSolo.vue'
import store from '../../src/store/index.js'

createApp(HDSolo).use(store).mount('#root')
