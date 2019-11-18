var vue = new Vue({
  el: '#app',
  mixins: [mixin],
  data: function () {
    return {
      title: 'testkaaaaa'
    }
  },
  methods: {

  },
  created: function () {
    console.log()
  },
  mounted () {
    // windowButtonOpen.$options.methods.openWindow()
  }
})