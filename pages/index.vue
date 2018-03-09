<template>
  <div class="landing">
    <div class="landing-header">
      <div class="brand">
        <div class="thumbnail"><img src="~/assets/node-fb-img.png"></div>
        <!-- <nuxt-link to="/">
          <img class="logo" src="~/assets/node_logo.png" alt="brand logo">
        </nuxt-link> -->
        <!-- <ul class="navbar">
          <li class="navItem"><nuxt-link to="/">Home</nuxt-link></li>
          <li class="navItem"><nuxt-link to="/about">About</nuxt-link></li>
          <li class="navItem"><nuxt-link to="/about">Characters</nuxt-link></li>
          <li class="navItem"><nuxt-link to="/about">Badges</nuxt-link></li>
        </ul> -->
      </div>

      <div class="text">
        <div class="page-title">Playa</div>
        <div class="page-subtitle">Reserve your chance to join the origin quest now!</div>
        <div class="apply"><a class="apply-btn" href="https://byzantine.typeform.com/to/fXpCQa" target="_blank">Ready playa?</a></div>
      </div>
    </div>
    <div class="summary">
      <div class="title">What is Playa?</div>
      <div class="subtitle">Playa is...</div>
    </div>
    <div class="slogan">
      <div class="row">
        <div class="column">
          <ul class="slogan-list">
            <li><img src="~/assets/build_icon.png"/></li>
            <li><span>Build</span></li>
            <li>your own crypto economy</li>
          </ul>
        </div>
        <div class="column">
          <ul class="slogan-list">
            <li><img class="bike" src="~/assets/bike_icon.png"/></li>
            <li><span>Explore</span></li>
            <li>the playa and contribute art</li>
          </ul>
        </div>
        <div class="column">
          <ul class="slogan-list">
            <li><img src="~/assets/badge_icon.png"/></li>
            <li><span>Train</span></li>
            <li>your character and build special skills</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- <div class="benefits">
      <div class="benefits-container">
        <div class="title">BENEFITS</div>
        <ul class="benefit-list">
          <li>24/7 access to a shared collaboration space</li>
          <li>Unique food and drinks</li>
          <li>Super fast wifi</li>
          <li>Exceptional content series for the crypto-curious</li>
          <li>Access to every other Node around the world</li>
        </ul>
      </div>
    </div> -->
    <div class="apply-form" id="apply-form">
      <!-- <div class="title">APPLY TO NODE</div> -->
      <div class="subtitle">Reserve your chance to join the origin quest now!</div>
      <div class="apply"><a class="apply-btn" href="https://byzantine.typeform.com/to/fXpCQa" target="_blank">Ready playa?</a></div>
      <div class="subscription-form">
        <div class="subscription-group">
          <input type="email" @keypress='emailChange' v-model='email' required>
          <button @click='submit'>Subscribe</button>  
        </div>
        <div class="success-msg">{{successMsg}}</div>
        <div class="error-msg">{{errorMsg}}</div>
      </div>
      <!-- <div class="apply-btn" target="_blank"><a href="https://byzantine.typeform.com/to/fXpCQa">APPLY</a></div> -->
      <!-- <form>
        <div class="row">
          <div class="column first-name input-group" label="First name">
            <input class="input-box" type="text">
          </div>
          <div class="column second-name input-group" label="Last name">
            <input class="input-box" type="text">
          </div>
        </div>
        <div class="email input-group" label="Email">
          <input class="input-box" type="text">
        </div>
        <div class="social input-group" label="Social accounts (Facebook, Instagram, Twitter, Steemit, etc.)">
          <input class="input-box" type="text">
        </div>
        <div class="phone input-group" label="Phone">
          <input class="input-box phone-box" type="text" maxlength="3" @keyup="phoneValidator($event, 3, 0)">
          <input class="input-box phone-box" type="text" maxlength="3" @keyup="phoneValidator($event, 3, 1)">
          <input class="input-box phone-box" type="text" maxlength="4" @keyup="phoneValidator($event, 4, 2)">
        </div>
        <div class="express input-group" label="What three links express you best?">
          <input class="input-box" type="text">
        </div>
        <div class="accomplishment input-group" label="What creative accomplishment are you most pround of?">
          <input class="input-box" type="text">
        </div>
        <div class="contribute input-group" label="With what do you see yourself contributing to Node?">
          <input class="input-box" type="text">
        </div>
        <div><input type="submit" class="submit-btn" value="SUBMIT"></div>
      </form> -->
    </div>
    <div class="footer">Product of <a href="https://byzantine.network"><span class="highlight">Byzantine</span></a> 🦄 </div>
    <div class="policies">
        <!-- <a href="https://app.termly.io/document/terms-of-use-for-saas/c434d77d-667b-4b76-bb03-a69230544d07" target="_blank"><span class="highlight">Terms of Service</span></a> & <a href="https://app.termly.io/document/privacy-policy-for-website/a84c7ecf-d07a-47bd-b714-ff63bab2f3ab" target="_blank"><span class="highlight">Privacy Policy</span></a> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      errorMsg: '',
      successMsg: ''
    }
  },
  methods: {
    emailChange () {
      this.errorMsg = !this.validEmail(this.email) ? 'Valid email required.' : '' 
    },
    validEmail:function(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    addEmailToSubscriptionList () {
      const vm = this
      axios({
        url: "https://api.node.nyc/api/playaSubscrption",
        method: 'post',
        data: {
          "email": this.email
        }
      })
      .then(function(response) {
        if (response) {
          console.log(response)
          vm.successMsg = 'Subscribed successfully!'
        }
      })
      .then(function(error) {
        if (error) console.log(error)
      })
    },
    submit () {
      if (this.validEmail(this.email)) {
        this.addEmailToSubscriptionList()
      } else {
        console.log('Valid email required.')
      }
    }
  }
}
</script>

<style scoped>
.landing{
  background: #000;
}
.landing-header {
  position: relative;
  background-image: url(~/assets/playa-bk.png);
  background-position: center;
  background-size: cover;
  padding: 20px 48px;
  height: 100vh;
}
.brand {
  position: relative;
  padding: 24px;
}
.logo {
  height: 30px;
}
.navbar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  text-align: center;
  list-style: none;
}
.navItem {
  display: inline-block;
  padding: 24px 25px;
  font-family: 'Roboto Mono', monospace;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .2em;
  font-size: .8em;
  color: #fff;
  line-height: 30px;
  cursor: pointer;
}
.navItem a {
  color: #fff;
  text-decoration: none;
}
.apply-btn {
  display: inline-block;
  padding: 24px 20px;
  font-family: "arame-regular", sans-serif;
  font-size: 1.2em;
  color: #fff;
  line-height: 30px;
  cursor: pointer;
}

.text {
  position: absolute;
  top: 36%;
  right: 0;
  left: 0;
  text-align: center;
  margin: auto;
  color: #fff;
  padding: 0 24px;
  transform: translateY(-50%);
}
.page-title,
.page-subtitle {
  font-family: 'Roboto Mono', monospace;
  font-size: .9em;
  text-align: center;
  margin: auto;
}
.page-title {
  font-family: "arame-regular", sans-serif;
  font-size: 7vw;
  letter-spacing: .6em;
  margin-left: .8em;
  background: -webkit-linear-gradient(#D52427, #F58F10);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.page-subtitle{
  color: #fff;
}
.apply {
  margin-top: 40px;
  text-align: center;
}
.apply-btn {
  padding: 13px 30px;
  /* height: 50px; */
  background: #F58F10;
  border: none;
  font-family: "arame-regular", sans-serif;
  font-size: .9em;
  text-decoration: none;
  border-radius: 50px;
  color: #fff;
  letter-spacing: 2px;
  outline: none;
}
.apply-btn a{
    text-decoration: none;
    color: #fff;
}
.apply-btn:hover{
  background: #D52427;
}
.apply-btn:active{
  background: #F58F10;
}
/* .typeform-btn {
  padding: 13px 30px;
  background: #F58F10;
  border: none;
  font-family: "arame-regular", sans-serif;
  font-size: .9em;
  text-decoration: none;
  border-radius: 50px;
  color: #fff;
  letter-spacing: 2px;
  outline: none;
}
.typeform-btn a{
  text-decoration: none;
  color: #fff;
  letter-spacing: 2px;
  outline: none;
}
.typeform-btn:hover{
  background: #93005B;
}
.typeform-btn:active {
  background: #D90086;
} */
/* .slogan {
  padding: 100px 20px;
  font-family: 'Archivo Black', sans-serif;
  font-size: 2.4vw;
  text-align: center;
  letter-spacing: 2px;
} */
.highlight {
  text-decoration: none;
  /* color: #ccc; */
}

.summary{
  padding: 100px 24px;
  margin: 0 auto;
  max-width: 1000px;
  color: #fff;
}
.summary .title {
  font-family: "arame-regular", sans-serif;
  margin: auto;
  margin-bottom: 20px;
  text-align: center;
  font-size: 1.5em;
  font-weight: 800;
  letter-spacing: 2px;
}
.summary .subtitle{
  font-family: 'Roboto Mono', monospace;
  margin: auto;
  font-size: .8em;
  text-align: center;
}

.slogan{
  padding: 100px 24px;
  margin: 0 auto;
  max-width: 1000px;
  color: #fff;
}
.slogan .row {
  margin: auto;
  max-width: 1000px;
}
.slogan-list {
  padding: 0;
  margin: auto;
  list-style: none;
  font-family: 'Roboto Mono', monospace;
}
.slogan-list li {
  padding: 0 24px 5px 24px;
  font-size: .8em;
  text-align: center;
}
.slogan-list img{
  padding: 0 24px;
  margin-bottom: 10px;
  height: 100px;
}
img.bike{
  margin-left: 20px;
}
.slogan-list li span{
  font-size: 1.5em;
  letter-spacing: .2em;
  font-family: "arame-regular", sans-serif;
}

.benefits {
  background: #000;
  text-align: left;
  padding: 80px auto;
}
.benefits-container{
  margin: auto;
  max-width: 1000px;
  padding: 60px 48px;
  color: #fff;
}
.benefits .title {
  font-family: "arame-regular", sans-serif;
  margin: 0 auto;
  margin-bottom: 40px;
  font-size: 1.5em;
  font-weight: 800;
  letter-spacing: 3px;
  max-width: 1000px;
}
.benefits .row {
  margin: auto;
  max-width: 840px;
}
.benefit-list {
  font-family: "rational-light", sans-serif;
  padding: 0;
  list-style: none;
}
.benefit-list li {
  padding: 10px 0;
  font-size: .9em;
  text-align: left;
}


.apply-form {
  margin: auto;
  padding: 80px 48px;
  max-width: 1000px;
  color: #fff;
}
.apply-form .title{
  font-family: "arame-regular", sans-serif;
  margin: 0 auto;
  margin-bottom: 40px;
  font-size: 1.5em;
  font-weight: 800;
  letter-spacing: 3px;
  max-width: 1000px;
}
.apply-form .subtitle {
  font-family: 'Roboto Mono', monospace;
  margin-bottom: 40px;
  font-size: .8em;
  text-align: center;
}
.apply-form .row{
  max-width: 600px;
}

.input-group {
  max-width: 600px;
  padding: 20px 0px;
  color: #424242;
}
.first-name{
  padding-right: 10px;
}
.input-group:before {
  font-family: 'Roboto Mono', monospace;
  content: attr(label);
  display: block;
  margin-bottom: 4px;
  font-size: .7em;
  line-height: 1.2em;
  color: #212121;
}
.input-box {
  margin-top: 10px;
  padding: 0 10px;
  width: 100%;
  height: 40px;
  border: 1px solid #616161;
  outline: none;
}
.input-group .input-box:first-child {
  margin-top: 0;
}
.phone-box {
  margin-top: 0;
  margin-right: 10px;
  max-width: 60px;
}
.submit-btn {
  font-family: "arame-regular", sans-serif;
  margin: 20px 0px;
  padding: 0 40px;
  height: 50px;
  background: #D90086;
  border: none;
  font-size: 1em;
  letter-spacing: 2px;
  color: #fff;
  outline: none;
}
.submit-btn:hover{
  background: #93005B;
}
.submit-btn:active {
  background: #D90086;
}

.footer {
  padding: 40px 0 0 0;
  font-size: 10px;
  color: #fff;
  text-align: center;
  font-family: 'Roboto Mono', monospace;
}
.footer a {
  color: #fff;
  text-decoration: none;
}
.footer a:hover {
  text-decoration: underline;
}

.policies {
  padding: 5px 0 20px 0;
  font-size: 10px;
  color: #212121;
  text-align: center;
  font-family: 'Roboto Mono', monospace;
}
.policies a {
  color: #212121;
  text-decoration: none;
}
.policies a:hover {
  text-decoration: underline;
}

.thumbnail {
  position: fixed;
  top: 100%;
  left: 100%;
  z-index: -100;
  opacity: 0;
}

@media (max-width: 767px) {
  .landing-header {
    padding: 24px;
  }
  .page-title {
    font-size: 10vw;
    line-height: 1em;
    letter-spacing: .6em;
  }
  .page-subtitle {
    margin-bottom: 20px;
    font-size: 1em;
  }

  .slogan {
    text-align: center;
  }
  .slogan .row {
    display: block;
  }
  .slogan .column {
    margin: 50px 0;
  }
  .slogan-list li {
    text-align: center;
  }
}

.subscription-form {
  margin: 40px auto 0;
  height: 40px;
  max-width: 500px;
  font-family: 'Roboto Mono', monospace;
}
.subscription-group { 
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.subscription-form input { 
  flex: 1;
  padding: 0 10px;
  background: rgba(255, 255, 255, .4);
  height: 100%;
  border: none;
  font-size: 16px;
  color: #fff;
  outline: none;
}
.subscription-form button { 
  flex: 0;
  margin-left: 10px;
  padding: 13px 20px;
  height: 100%;
  background: #F58F10;
  border: none;
  font-family: "arame-regular", sans-serif;
  font-size: .9em;
  text-decoration: none;
  color: #fff;
  letter-spacing: 2px;
  outline: none;
  cursor: pointer;
}
.subscription-form button:hover {
  background: #D52427;
}
.success-msg,
.error-msg {
  margin-top: 4px;
  font-size: 12px;
  text-align: left;
  color: #D52427;
}
.success-msg {
  color: #fff;
}

@media (max-width: 425px) {
  .landing-header {
    padding: 0;
  }
  .navbar{
    margin: auto;
    padding: 0;
  }
  .navItem {
    padding: 24px 20px;
    letter-spacing: .1em;
}
  .apply-link{
    display: none;
  }
  .page-title{
    letter-spacing: .5em;
    margin-left: .5em;
  }
}
</style>
