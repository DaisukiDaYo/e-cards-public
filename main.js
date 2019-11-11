new Vue({
  mixins: [mixin],
  data: function () {
    return {
      message: 'goodbye',
      bar: 'def'
    }
  },
  methods: {
    
  },
  created: function () {
    this.reset()
  }
})