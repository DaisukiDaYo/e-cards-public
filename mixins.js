var mixin = {
    data: function () {
      return {
        message: 'hello',
        foo: 'abc'
      }
    },
    methods: {
      reset () {
        alert('reset')
      }
    },
  }