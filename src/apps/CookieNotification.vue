<template>
    <transition name="fade" mode="out-in">
      <div v-if="active" class="amplify-cookie-notification notification margin-bottom-0" :class="content.bgColor + ' ' + content.textColor">
        <button class="delete" @click="closeForm()"></button>
        <h4 class="is-5 title has-margin-bottom-3">{{content.title}}</h4>
        <div v-html="content.text"></div>
        <div class="buttons has-margin-top-4">
          <a class="button is-fullwidth" :class="content.buttonColor" @click="closeForm()">
            {{content.buttonText}}
          </a>
        </div>
      </div>
    </transition>
</template>

<script>
  import VueCookies from 'vue-cookies';

  export default {
    name: 'cookie-notification',
    data () {
      return {
        active: false,
        agreeTerms: false,
        content: {},
      }
    },
    methods: {
      show() {
        this.active = true;
      },
      closeForm() {
        VueCookies.set('AgreeTerms', true);
        this.active = false;
      }
    },
    beforeMount () {
      this.content = window.amplify.cookieNotification;
      if(this.content.display){
          if(!VueCookies.get('AgreeTerms')){
            this.show();  
          }
      }
    }
  }
</script>
