var initData = function () {
    return {
      audioLink: './assets/christmas-cheer.wav',
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
        },
        playAgain: function () {
          Object.assign(this.$data, initData())
					this.calculateButtonPosition()
        },
        playAudio: async function () {
					this.isSoundOn = true
					audio.muted = true
					await this.delay(5400)
					audio.muted = false
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
					this.calculateTextContainerPosition()

        },
        calculateButtonPosition: function () {
          this.$nextTick(function() {
						if (this.card === 1) {
							let SVGbutton = this.$refs['svg-button'].$el.getBoundingClientRect()
							let virtualButton = this.$refs['vitual-button']
							
							virtualButton.style.width = SVGbutton.width + 'px'
							virtualButton.style.height = SVGbutton.height + 'px'
							virtualButton.style.top = SVGbutton.y + window.scrollY + 'px'
							virtualButton.style.left = SVGbutton.x + window.scrollX + 'px'
						}
          })
        },
        calculateShareButtonPosition: function () {
					this.$nextTick(function() {
						if (this.card === 2) {
							let playAgainButton = this.$refs['play-again-button'].$el.getBoundingClientRect()
							let shareContainer = this.$refs['share-container']
							let position = (playAgainButton.y + window.scrollY) - (playAgainButton.y * 2/100)
							shareContainer.style.top = position + 'px'
						}
				})
			},
				calculateTextContainerPosition: function () {
					this.$nextTick(function() {
						let prontoLogo = this.$refs['pronto-logo'].$el.getBoundingClientRect()
						let textContainer = this.$refs['text-container']
						let position = prontoLogo.y + window.scrollY + (prontoLogo.y * 20/100)
						textContainer.style.top = position + 'px'
					})
        }
			},
			watch: {
					isSoundOn: async function (newValue, oldValue) {
						if (newValue === true) {
							audio.play()
							audio.loop = true
							audio.volume = 1.0
						} else {
							audio.pause()
						}
        }
      },
      mounted: function() {
				this.calculateButtonPosition()
				window.addEventListener('resize', this.calculateButtonPosition)
				window.addEventListener('resize', this.calculateShareButtonPosition)
				window.addEventListener('resize', this.calculateTextContainerPosition)
      },
      destroyed: function() {
        window.removeEventListener('resize', this.calculateButtonPosition)
        window.removeEventListener('resize', this.calculateShareButtonPosition)
      }
    })