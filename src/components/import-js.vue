<template>
  <div>
    nhgnhghn
  </div>
</template>

<script>
import jd from './js.js'
export default {
    name: 'loading',
    computed: {
    
    },
    data () {
        return {
          show: false
      };
    },
    methods: {
      aa() {
        import('./js.js').then(data =>{
          console.log(jd)
        })
      }
    },
    created () {
      this.aa()
    }
};
</script>


<style>

</style>