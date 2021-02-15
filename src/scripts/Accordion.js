class Accordion {
    constructor (element) {
      this.activeClass = 'is-active'
      this.$accordionPanes = Array.prototype.slice.call(element.querySelectorAll('.card-header-title'), 0)
      
      document.addEventListener('DOMContentLoaded', () => {
        if (typeof this.callback === 'function') {
          this.callback()
        }
      })
    }
  
    onReady (callback) {
      this.callback = callback
    }

    init () {
      if (this.$accordionPanes.length > 0) {
        this.$accordionPanes.forEach(el => {
            el.addEventListener('click', (event) => {
                event.target.closest('.card').classList.toggle(this.activeClass)
            })
          })
      }
    }
  }
  
  export default Accordion
  