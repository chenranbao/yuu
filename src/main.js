// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//import 'amfe-flexible'
import ElementUI from 'element-ui'
import Blob from './excel/Blob.js'
import Export2Excel from './excel/Export2Excel.js'
import VueQuillEditor from 'vue-quill-editor'
import printJS from 'print-js'

// require styles 引入样式
import 'element-ui/lib/theme-chalk/index.css'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import '@/assets/iconfont.css'
Vue.use(ElementUI)
Vue.use(VueQuillEditor)

Vue.config.productionTip = false
init()
/* eslint-disable no-new */
function init() {
  window.application = new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  })
  console.log(window)
}


