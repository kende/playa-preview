<template>
  <div class="landing">
    <div class="landing-header">
      <div class="brand"><img class="logo" src="~/assets/node_logo.png" alt="brand logo"></div>
    </div>
    <div class="slogan">
      <div class="title">Blockchain Based Decentralized Space</div>
      <div class="row">
        <div class="column">
          <ul class="slogan-list">
            <li><span>Encoded on the blockchain</span></li>
            <li>ERC-721 token for each member</li>
          </ul>
        </div>
        <div class="column">
          <ul class="slogan-list">
            <li><span>Exceptional content series for the crypto-curious</span></li>
            <li>Access to every other Node around the world</li>
          </ul>
        </div>
        <div class="column">
          <ul class="slogan-list">
            <li><span>Encoded on the blockchain</span></li>
            <li>ERC-721 token for each member</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="benefits">
      <div class="title">BENEFITS</div>
      <div class="row">
        <div class="column">
          <ul class="benefit-list">
            <li>24/7 access to a shared collaboration space</li>
            <li>Unique food and drinks</li>
            <li>Super fast wifi</li>
            <li>Exceptional content series for the crypto-curious</li>
            <li>Access to every other Node around the world</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="apply-form">
      <div class="title">APPLY TO NODE</div>
      <div class="subtitle">We are currenly accepting applications for the first members of Node NYC.</div>
      <form>
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
      </form>
    </div>
    <div class="footer">Node:02 in the Node Network | <a href="https://nodeworldwide.com"><span class="highlight">Return to Node:Origin</span></a></div>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  methods: {
    phoneValidator (e, maxLength, boxIndex) {
      const el = e.target
      const value = el.value
      const lastChar = parseInt(value.slice(-1))
      if (lastChar >= 0 && lastChar <= 9) {
        switch (e.keyCode) {
        case 8:
          if (boxIndex !== 0 && value.length === 0) el.previousElementSibling.focus()
          return
        default:
          if (value.length >= maxLength && boxIndex !== 2) el.nextElementSibling.focus()
        }
      } else {
        el.value = value.substring(0, value.length - 2)
      }
    }
  }
}
</script>

<style scoped>
.row {
  display: flex;
}
.column {
  flex: 1;
}

.landing-header {
  background-image: url(~/assets/glitch-bk.png);
  background-position: center;
  background-size: cover;
  height: 100vh;
}
.brand {
  padding: 24px;
}
.logo {
  height: 40px;
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
.benefits {
  padding: 60px 24px;
  background: #ededed;
  text-align: left;
}
.benefits .title {
  margin: auto;
  margin-bottom: 40px;
  font-size: 1.4em;
  font-weight: 800;
  letter-spacing: 6px;
  max-width: 840px;
}
.benefits .row {
  margin: auto;
  max-width: 840px;
}
.benefit-list {
  padding: 0;
  list-style: none;
}
.benefit-list li {
  padding: 10px 0;
  font-size: .9em;
  text-align: left;
}


.slogan{
  padding: 60px 24px;
  margin: 0 auto;
  max-width: 1000px;
}
.slogan .title {
  margin-bottom: 40px;
  padding-left: 24px;
  text-align: left;
  font-size: 1.4em;
  font-weight: 800;
  letter-spacing: 6px;
}
.slogan .row {
  margin: auto;
  max-width: 1000px;
}
.slogan-list {
  padding: 0;
  list-style: none;
}
.slogan-list li {
  padding: 10px 24px;
  font-size: .9em;
  text-align: left;
}
.slogan-list li span{
  font-family: times, serif;
}

.apply-form {
  margin: auto;
  padding: 0 10px;
  width: 100%;
  max-width: 500px;
}
.apply-form .title {
  margin-top: 100px;
  margin-bottom: 20px;
  font-size: 1.4em;
  font-weight: 800;
  letter-spacing: 6px;
  text-align: center;
}
.apply-form .subtitle {
  margin-bottom: 40px;
  font-size: .8em;
  text-align: center;
  color: #424242;
}

.input-group {
  padding: 20px 10px;
  color: #424242;
}
.input-group:before {
  content: attr(label);
  display: block;
  margin-bottom: 4px;
  font-size: .8em;
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
  margin: 20px 10px;
  padding: 0 20px;
  height: 40px;
  background: #D90086;
  border: none;
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

@media (max-width: 767px) {
  .slogan {
    font-size: 6vw;
  }
}
</style>
