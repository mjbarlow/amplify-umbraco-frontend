class MenuList {
    constructor (element) {
      this.activeClass = 'is-active'
      this.$menuPanes = Array.prototype.slice.call(element.querySelectorAll('.amplify-menu-header'), 0)
      
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
      if (this.$menuPanes.length > 0) {
        this.$menuPanes.forEach(el => {
            el.addEventListener('click', (event) => {
                event.target.closest('.amplify-menu').classList.toggle(this.activeClass)
            })
          })
      }
    }
  }
  
  export default MenuList
  