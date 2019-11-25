var windowButtonOpen = new Vue({
  el: '#window-button-open',
  data () {
    return {
      white: '#fff'
    }
  },
  methods: {
    openWindow () {
      alert('open window')
    }
  },
  created: function () {
  },
  template: 
    `
    <svg  class="svg-button animated bounce">
    <g id="push-window-bubble">
        <path id="Path_639" data-name="Path 639" class="cls-168" d="M781,314.44H580.73a6.66,6.66,0,0,0-6.66,6.66h0v28a6.67,6.67,0,0,0,6.66,6.67h91.5l8.64,8.64,8.64-8.64H781a6.67,6.67,0,0,0,6.66-6.67h0v-28a6.66,6.66,0,0,0-6.66-6.66Z"/>
        <g @click="openWindow" id="Click_to_open_the_window_" data-name="Click to open the window " class="cls-13">
          <g class="cls-13" :fill="white">
          </g>
        </g>
    </g>
    </svg>
    `

})
