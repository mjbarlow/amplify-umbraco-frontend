class Tabs {
    constructor (element) {
      this.activeClass = 'is-active'
      this.$tabsHeader = element.getElementsByClassName('tabs')[0]
      this.$tabsPanelContainer = element.getElementsByClassName('tab-panels')[0]
      
      this.$tabLinks = Array.prototype.slice.call(this.$tabsHeader.querySelectorAll('a'), 0)
      this.$tabPanels = Array.prototype.slice.call(this.$tabsPanelContainer.querySelectorAll('.tab-panel'), 0)
      
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

      if (this.$tabLinks.length > 0) {
        
        this.$tabLinks.forEach(el => {
            el.addEventListener('click', (event) => {

              // add the active class to the tabs
              for (let j = 0; j < this.$tabLinks.length; j++) {
                if(el.dataset.tab !== this.$tabLinks[j].dataset.tab ){
                  this.$tabLinks[j].closest('li').classList.remove(this.activeClass)
                }else{
                  event.target.closest('li').classList.add(this.activeClass)
                }
              }

              for (let j = 0; j < this.$tabPanels.length; j++) {
                if(el.dataset.tab !== this.$tabPanels[j].id ){
                  this.$tabPanels[j].classList.remove(this.activeClass)
                }else{
                  this.$tabPanels[j].classList.add(this.activeClass)
                }
              }
         
            })
          })
      }
    }
  }
  
  export default Tabs
  