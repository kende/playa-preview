<template>
  <div class="landing">
    <div class="landing-header">
      <div class="brand">
        <nuxt-link to="/">
          <img class="logo" src="~/assets/node_logo.png" alt="brand logo">
        </nuxt-link>
        <ul class="navbar">
          <li class="navItem"><nuxt-link to="/about">ABOUT US</nuxt-link></li>
          <li class="navItem"><a href="https://byzantine.typeform.com/to/fXpCQa">APPLY</a></li>
        </ul>
      </div>

      <div class="text">
        <div class="page-subtitle">FROM SAN FRANCISCO TO WILLIAMSBURG</div>
        <div class="page-title">WELCOME HOME</div>
        <div class="apply"><a class="apply-btn" href="#apply-form">APPLY NOW</a></div>
      </div>
    </div>
    <div class="slogan">
      <div class="title">Blockchain Based Decentralized Space</div>
      <div class="row">
        <div class="column">
          <ul class="slogan-list">
            <img src="~/assets/icon-access.png"/>
            <li><span>Exclusive Access</span></li>
            <li>For $200/month, you’ll have access to every node space around the world, including the original location in SF and the first NYC location</li>
          </ul>
        </div>
        <div class="column">
          <ul class="slogan-list">
            <img src="~/assets/icon-events.png"/>
            <li><span>Unique Events</span></li>
            <li>The center for blockchain and crypto</li>
          </ul>
        </div>
        <div class="column">
          <ul class="slogan-list">
            <img src="~/assets/icon-blockchain.png"/>
            <li><span>Encoded on the blockchain</span></li>
            <li>ERC-721 token for each member</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="benefits">
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
    </div>
    <div class="apply-form" id="apply-form">
      <div class="title">APPLY TO NODE</div>
      <div class="subtitle">We are currenly accepting applications for the first members of Node NYC.</div>
      <div class="navItem"><a href="https://byzantine.typeform.com/to/fXpCQa">APPLY</a></div>
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
    <div class="footer">Part of the <a href="https://nodeworldwide.com"><span class="highlight">Node Worldwide Network</span></a></div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  methods: {
    phoneValidator (e, maxLength, boxIndex) {
      const el = e.target
      const value = el.value
      const lastChar = parseInt(value.slice(-1))
      switch (e.keyCode) {
      case 8:
        if (boxIndex !== 0 && value.length === 0) el.previousElementSibling.focus()
        return
      default:
        if (value.length >= maxLength && boxIndex !== 2) el.nextElementSibling.focus()
      }
      if (!(lastChar >= 0 && lastChar <= 9)) {
        el.value = value.substring(0, value.length - 2)
      }
    }
    // submit () {
    //   axios.get('https://script.google.com/macros/s/AKfycby3hdLs2aMMlhHrZIQHRIsELEhGHksR0kBXfRTPCXwSmWOftjk/exec', { params: {Item: "Door", Cost: "$15", Stocked: "2", "Ship Date": "3/15/2016"
    //   }})
    // }
  }
}
</script>

<style scoped>
.landing-header {
  position: relative;
  background-image: url(~/assets/glitch-bk.png);
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
  list-style: none;
}
.navItem {
  display: inline-block;
  padding: 24px 20px;
  font-family: "arame-regular", sans-serif;
  font-size: 1.2em;
  color: #fff;
  line-height: 30px;
  cursor: pointer;
}
.navItem a {
  color: #fff;
  text-decoration: none;
}

.text {
  position: absolute;
  top: 50%;
  color: #fff;
  padding: 0 24px;
  transform: translateY(-50%);
}
.page-title,
.page-subtitle {
  font-family: "rational-light", sans-serif;
  font-size: 1.8em;
  color: #fff;
}
.page-title {
  font-family: "arame-regular", sans-serif;
  font-size: 10vw;
}
.apply {
  margin-top: 40px;
}
.text .apply-btn {
  padding: 16px 40px;
  height: 50px;
  background: #D90086;
  border: none;
  font-family: "arame-regular", sans-serif;
  font-size: 1em;
  text-decoration: none;
  color: #fff;
  letter-spacing: 2px;
  outline: none;
}
/* .slogan {
  padding: 100px 20px;
  font-family: 'Archivo Black', sans-serif;
  font-size: 2.4vw;
  text-align: center;
  letter-spacing: 2px;
} */
.highlight {
  text-decoration: none;
  color: #ccc;
}


.slogan{
  padding: 80px 24px;
  margin: 0 auto;
  max-width: 1000px;
}
.slogan .title {
  font-family: "arame-regular", sans-serif;
  margin-bottom: 40px;
  padding-left: 24px;
  text-align: left;
  font-size: 1.5em;
  font-weight: 800;
  letter-spacing: 2px;
}
.slogan .row {
  margin: auto;
  max-width: 1000px;
}
.slogan-list {
  padding: 0;
  list-style: none;
  font-family: "rational-light", sans-serif;
}
.slogan-list li {
  padding: 0 24px 5px 24px;
  font-size: .8em;
  text-align: left;
}
.slogan-list img{
  padding: 0 24px;
  margin-bottom: 5px;
  height: 30px;
}
.slogan-list li span{
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
  font-family: "rational-light", sans-serif;
  margin-bottom: 40px;
  font-size: .8em;
  text-align: left;
  color: #424242;
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
  font-family: "rational-light", sans-serif;
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
  padding: 40px 0;
  font-size: 12px;
  color: #a5a5a5;
  text-align: center;
}
.footer a {
  color: #a5a5a5;
}

@media (max-width: 767px) {
  .landing-header {
    padding: 24px;
  }
  .page-title {
    font-size: 14vw;
    line-height: 1em;
  }
  .page-subtitle {
    margin-bottom: 20px;
    font-size: 1.4em;
  }

  .slogan {
    text-align: center;
  }
  .slogan .row {
    display: block;
  }
  .slogan .column {
    margin: 20px 0;
  }
  .slogan-list li {
    text-align: center;
  }
}
@media (max-width: 425px) {
  .landing-header {
    padding: 0;
  }
}
</style>
