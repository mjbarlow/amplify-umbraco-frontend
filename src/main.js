import './sass/bulma.sass'
import Vue from 'vue'
import CookieNotification from './apps/CookieNotification'
import AlertNotification from './apps/AlertNotification'
import MobileMenu from './scripts/MobileMenu'
import Accordion from './scripts/Accordion'
import BackToTop from './scripts/BackToTop'
import MenuList from './scripts/MenuList'
import Tabs from './scripts/Tabs'
import Glide from '@glidejs/glide'
import GLightbox from 'glightbox'
import Plyr from 'plyr'
import AOS from 'aos'

Vue.config.productionTip = false

let cookieNotification = document.querySelector('#amplify-cookie')

if(cookieNotification) {
  new Vue({
    render: h => h(CookieNotification),
  }).$mount('#amplify-cookie')
}

let alertNotification = document.querySelector('#amplify-alert')
if(alertNotification) {
  new Vue({
    render: h => h(AlertNotification)
  }).$mount('#amplify-alert')
}

let backToTop  = new BackToTop('#backToTop')
backToTop.onReady(() => { backToTop.init() })

// mobile menu
let mobileMenu = new MobileMenu('#navbarMain')
mobileMenu.onReady(() => { mobileMenu.init() })

let accordions = document.querySelectorAll('.amplify-accordion')

for (let i = 0; i < accordions.length; i++){
  let accordion = new Accordion(accordions[i])
  accordion.onReady(() => {accordion.init() })
}

let tabs = document.querySelectorAll('.amplify-tabs')

for(let i = 0; i < tabs.length; i++){
  let tab = new Tabs(tabs[i])
  tab.onReady(() => { tab.init()})
}

let sliders = document.querySelectorAll('.glideMini')

for (let i = 0; i < sliders.length; i++) {
  let glide = new Glide(sliders[i], {
    autoplay: 4000,
    type: 'carousel'
  })
  glide.mount()
}

var sectionSlider = document.querySelectorAll('.sectionGlide')

for (let i = 0; i < sectionSlider.length; i++) {
  let glide = new Glide(sectionSlider[i], {
    autoplay: 10000,
    type: 'carousel'
  })
  glide.mount()
}

let glightBox = document.querySelector('.amplify-gallery')

if(glightBox){

  GLightbox({
    touchNavigation: true,
    loop: true,
    autoplayVideos: true,
    onOpen: () => {}
  });
}

let menuLists = document.querySelectorAll('.amplify-menu')

for (let i = 0; i < menuLists.length; i++){
  let menuList = new MenuList(menuLists[i])
  menuList.onReady(() => {menuList.init() })
}

let plyrs = document.querySelectorAll('amplify-video')
for (let i = 0; i < plyrs.length; i++) {
  let plyrs = new Plyr(plyrs[i]);
}

AOS.init({
  once: true
})

document.addEventListener('DOMContentLoaded', () => {
  console.log('Amplify - Premium Theme - made with LOVE. => https://jacker.io')
})