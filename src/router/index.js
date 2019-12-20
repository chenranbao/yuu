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
import test from '@/components/test'
import importJS from '@/components/import-js'
import deep from '@/components/deep'
import mscollLeft from '@/components/mscollLeft'
import consanguinityChart from '@/components/consanguinity-chart'
import interpersonalDiagram from '@/components/interpersonal-diagram'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/deep',
      name: 'deep',
      component: deep
    },
    {
      path: '/mscoll-left',
      name: 'mscoll-left',
      component: mscollLeft
    },
    {
      path: '/interpersonal-diagram',
      name: 'interpersonalDiagram',
      component: interpersonalDiagram
    },
    {
      path: '/consanguinity-chart',
      name: 'consanguinityChart',
      component: consanguinityChart
    },
    {
      path: '/importJS',
      name: 'importJS',
      component: importJS
    },
    {
      path: '/print',
      name: 'print',
      component: print
    },
    {
      path: '/test',
      name: 'test',
      component: test
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
