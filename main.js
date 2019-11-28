var initData = function () {
    return {
      audioLink: './assets/christmas-cheer.wav',
    //   audio = new Audio('./assets/christmas-cheer.wav'),
      card: 1,
      isOpen: false,
      isSoundOn: false,
      isTransition: false,
      isMouseOverButton: false,
      maxWindowCount: 5,
      step: 0,
    }
}

var audio = new Audio('./assets/christmas-cheer.wav')

var vm = new Vue({
    el: '#app',
    data () {
      return initData()
      },
      methods: {
        delay: async function (seconds) {
          return await new Promise(resolve => {
            setTimeout(resolve, seconds);
          })
        },
        openWindow: async function () {
					this.isOpen = true
					this.playAudio()
          await this.stepWindowOpen()
					this.transitionToCard2()
					// this.isSoundOn = true
					// this.isSoundOn = true
        },
        playAgain: function () {
          Object.assign(this.$data, initData())
          this.calculateButtonPosition()
        },
        stepWindowOpen: async function () {
          for (this.step; this.step <= this.maxWindowCount; this.step++) {
            await this.delay(300)
          }
        },
        transitionToCard2: async function () {
          this.isTransition = true
          await this.delay(1500)
          this.card = 2
          this.calculateShareButtonPosition()
        },
        calculateButtonPosition: function () {
          this.$nextTick(function() {
            let SVGbutton = this.$refs['svg-button'].$el.getBoundingClientRect()
            let virtualButton = this.$refs['vitual-button']
    
            virtualButton.style.width = SVGbutton.width + 'px'
            virtualButton.style.height = SVGbutton.height + 'px'
            virtualButton.style.top = SVGbutton.y + window.scrollY + 'px'
            virtualButton.style.left = SVGbutton.x + window.scrollX + 'px'
          })
        },
        calculateShareButtonPosition: function () {
          this.$nextTick(function() {
            let playAgainButton = document.querySelector('#Play_Again_').getBoundingClientRect()
            let shareButton = document.querySelector('.share-container')
            shareButton.style = playAgainButton.y + window.scrollY + 'px'
            shareButton.style.top = playAgainButton.y + window.scrollY + 'px'
          })
        },
        playAudio: async function () {
					this.isSoundOn = false
					await this.delay(1500)
					this.isSoundOn = true
				}
			},
			watch: {
					isSoundOn: async function (newValue, oldValue) {
						if (newValue === true) {
							audio.play()
							audio.loop = true
					} else {
						audio.pause()
          }
        }
      },
      mounted: function() {
        this.calculateButtonPosition()
        window.addEventListener('resize', this.calculateButtonPosition)
        window.addEventListener('resize', this.calculateShareButtonPosition)
      },
      destroyed: function() {
        window.removeEventListener('resize', this.calculateButtonPosition)
        window.removeEventListener('resize', this.calculateShareButtonPosition)
      }
    })