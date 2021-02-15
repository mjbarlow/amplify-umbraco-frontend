import Util from './Util'

class BackToTop {
    constructor(selector) {

        this.element = document.querySelector(selector) //// get the element
        this.scrollElement = window
        this.scrollOffset = parseInt(this.element.offset) || 300 // browser scroll after which link is shown 
        this.scrollDuration = parseInt(this.element.dataset.duration) || 300 // time it takes
        this.scrolling = false // whether currently scrolling

        document.addEventListener('DOMContentLoaded', () => {
            if (typeof this.callback === 'function') {
                this.callback()
            }
        })
    }

    init() {
        let backToTop = this
        
        if(backToTop){
            this.element.addEventListener('click', function (event) {
                event.preventDefault();
                if (!window.requestAnimationFrame) {
                    backToTop.scrollElement.scrollTo(0, 0)
                } else {
                    backToTop.element ? Util.scrollTo(0, backToTop.scrollDuration, false, backToTop.scrollElement) : Util.scrollTo(0, backToTop.scrollDuration)
                }
                Util.moveFocus(document.getElementById(this.element.getAttribute('href').replace('#', '')))
            })

            if (this.scrollOffset > 0) {
                this.scrollElement.addEventListener("scroll", function () {
                    if (!backToTop.scrolling) {
                        backToTop.scrolling = true
                        if(!window.requestAnimationFrame){
                            setTimeout(function () 
                            { 
                                backToTop.checkBackToTop() 
                            }, 250) 
                        }
                        else {
                            window.requestAnimationFrame( () => backToTop.checkBackToTop())
                        }
                    }
                })
            }
        }
    }

    checkBackToTop() {
        let windowTop = this.scrollElement.scrollTop || document.documentElement.scrollTop
        if (!this.element) {
            windowTop = window.scrollY || document.documentElement.scrollTop
        }
        Util.toggleClass(this.element, 'amplify-top--is-visible', windowTop >= this.scrollOffset)
        this.scrolling = false
    }

    onReady(callback) {
        this.callback = callback
    }
}

export default BackToTop
