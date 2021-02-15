class MobileMenu {
    constructor (selector) {
      let menu = this
      this.$rootEl = document.documentElement
      this.$element = document.querySelector(selector)

      if(this.$element === null){
        return
      }

      this.navActiveClass = 'is-active'
      let naviInit =  this.$element.dataset.initClass.split(" ") 
      this.naviInitClass = naviInit.filter(function(str) {
        return /\S/.test(str);
      })
      this.naviInitClass
      this.clippedClass = 'is-clipped'
      this.$navbarBurgers = Array.prototype.slice.call(this.$element.querySelectorAll('.navbar-burger'), 0)
      this.$navbarMenu = this.$element.querySelector('#navbarMenu')
      this.$dropdownLinks = Array.prototype.slice.call(this.$navbarMenu.querySelectorAll('.has-dropdown'),0)
      this.$buttons = Array.prototype.slice.call(this.$element.querySelectorAll('.is-inverted'), 0)

      document.addEventListener('DOMContentLoaded', () => {
        if (typeof this.callback === 'function') {
          this.callback()
        }
      })

      document.addEventListener("click", function(event) {

        if (event.target.closest(".has-dropdown")) {
          return
        }      

        menu.resetDropdowns()
      })
    }
  
    onReady (callback) {
      this.callback = callback
    }

    init () {
      if (this.$navbarBurgers.length > 0) {
        this.$navbarBurgers.forEach(el => {

          el.addEventListener('click', () => {
            
            for (let index = 0; index < this.naviInitClass.length; ++index) {
              this.$element.classList.toggle(this.naviInitClass[index])
            }
        
            for (let index = 0; index <  this.$buttons.length; ++index) {
              this.$buttons[index].classList.toggle('is-inverted')
            }
            const target = el.dataset.target
            const $target = document.getElementById(target)
            this.$rootEl.classList.toggle(this.clippedClass);
            el.classList.toggle(this.navActiveClass)
            $target.classList.toggle(this.navActiveClass) 
          })

        })
      }

      if (this.$dropdownLinks.length > 0) {
        this.$dropdownLinks.forEach(el => {
            el.addEventListener('click', (event) => {
              
              if(event.target.classList.contains('navbar-link')){
                event.preventDefault()
                for (var j = 0; j < this.$dropdownLinks.length; j++) {
                  if(el.id !== this.$dropdownLinks[j].id ){
                    this.$dropdownLinks[j].classList.remove(this.navActiveClass)
                  }
                }
                el.classList.toggle(this.navActiveClass)
              }
            })
          })
      }


      window.addEventListener('resize', () => {
        this.resetNavs()
      })
    }

    resetDropdowns () {
      for (var j = 0; j < this.$dropdownLinks.length; j++) {
        this.$dropdownLinks[j].classList.remove(this.navActiveClass)
      }
    }

    resetNavs () {
      for (var i = 0; i < this.$navbarBurgers.length; i++) {
        this.$navbarBurgers[i].classList.remove(this.navActiveClass)
      }

      this.$navbarMenu.classList.remove(this.navActiveClass)
      this.$rootEl.classList.remove(this.clippedClass);

      for (let index = 0; index < this.naviInitClass.length; ++index) {
        this.$element.classList.add(this.naviInitClass[index])
      }

      for (let index = 0; index <  this.$buttons.length; ++index) {
        this.$buttons[index].classList.add('is-inverted')
      }
  
      this.resetDropdowns()

    }
  }
  
  export default MobileMenu
  