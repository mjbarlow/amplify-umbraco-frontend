<template>
    <transition name="fade" mode="out-in">
      <div v-if="active" class="amplify-alert-notification notification has-margin-bottom-0" :class="content.bgColor + ' ' + content.textColor">
        <button class="delete" @click="closeForm()"></button>
        <div class="container">
          <div class="column is-two-thirds-desktop">
          <h4 class="is-size-5 is-size-4-tablet">{{content.title}}</h4>
          <div v-html="content.text"></div>
          <div class="buttons has-margin-top-4" v-if="content.buttons">
            <a v-for="(button, index) in content.buttons" :key="index" class="button" :class="button.linkClass" :href="button.url">
              <span>{{button.text}}</span>
            </a> 
          </div>
          </div>
        </div>
      </div>
    </transition>
</template>

<script>
  import VueCookies from 'vue-cookies';

  export default {
    name: 'alert-notification',
    props: {
      content: Object
    },
    data () {
      return {
        active: false,
        agreeTerms: false
      }
    },
    methods: {
      show() {
        this.active = true;
      },
      closeForm() {
        VueCookies.set('HideAlert', true);
        this.active = false;
      }
    },
    beforeMount () {
      this.content = window.amplify.alert;
      if(this.content.display){
          if(!VueCookies.get('HideAlert')){
            this.show();  
          }
      }
    }
  }
</script>
