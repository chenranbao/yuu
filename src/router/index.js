import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import exelImport from '@/components/exel_import'
import quillEditor from '@/components/quill-editor'
import exports from '@/components/export'
import bigWheel from '@/components/big-wheel'
import Canvas from '@/components/canvas'
import luckyWheel from '@/components/lucky-wheel'
import lucky from '@/components/luck'
import print from '@/components/print'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/print',
      name: 'print',
      component: print
    },
    {
      path: '/lucky',
      name: 'lucky',
      component: lucky
    },
    {
      path: '/lucky-wheel',
      name: 'luckyWheel',
      component: luckyWheel
    },
    {
      path: '/canvas',
      name: 'canvas',
      component: Canvas
    },
    {
      path: '/exel-import',
      name: 'exelImport',
      component: exelImport
    },
    {
      path: '/quill-editor',
      name: 'quill-editor',
      component: quillEditor
    },
    {
      path: '/exports',
      name: 'exports',
      component: exports
    },
    {
      path: '/big-wheel',
      name: 'bigWheel',
      component: bigWheel
    }
  ]
})
