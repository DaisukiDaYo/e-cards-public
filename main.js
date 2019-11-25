var vue = new Vue({
  el: '#app',
  mixins: [mixin],
  data: function () {
    return {
      title: 'testkaaaaa',
      isOpen: false,
      white: '#fff',
    }
  },
  methods: {
    test () {
      alert('test')
    }

  },
  created: function () {
    console.log()
  },
  mounted () {
    // windowButtonOpen.$options.methods.openWindow()
  }
})