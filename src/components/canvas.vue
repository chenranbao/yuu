<template>
  <div class="aa">
  dscd
    <myCan :dotsNum="dotsNum"></myCan>
  </div>

</template>

<script>
  import myCan from 'vue-atom-canvas'
   export default {
    name: "item",
    data() {
     return {
       dotsNum: 60,
      msg: 'dcscdscds',
      }
    },
    methods: {

    },
    created() {
    }
  }
</script>