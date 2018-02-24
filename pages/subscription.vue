<template>
  <div class="subscription">
    <div class="header">
      <nuxt-link to="/">
        <img class="logo" src="~/assets/node_logo.png" alt="brand logo">
      </nuxt-link>
    </div>
    <div class="container">
      <form id="payment-form">
        <div class="form-title">Credit or Debit Card</div>
        <input type="hidden" name="token" />
        <div class="input-group">
          <label for="card-number">Card number</label>
          <div class="input-box" id="card-number"></div>
          <!-- <div id="number-errors" role="alert"></div> -->
        </div>
        <div class="input-group">
          <label for="card-expiry">Expiration Date</label>
          <div class="input-box" id="card-expiry"></div>
          <!-- <div id="expiry-errors" role="alert"></div> -->
        </div>
        <div class="input-group">
          <label for="card-cvc">CVC</label>
          <div class="input-box" id="card-cvc"></div>
          <!-- <div id="cvc-errors" role="alert"></div> -->
        </div>
        <div class="input-group">
          <label for="postal-code">postal-code</label>
          <div class="input-box" id="postal-code"></div>
          <!-- <div id="postal-code-errors" role="alert"></div> -->
        </div>
        <div class="input-group email-container">
          <label for="email">Email</label>
          <div class="input-box" id="email">
            <input class="email-box" id="email-box" type="email" placeholder="Email" v-model='email'>
          </div>
        </div>
      <button class="submit-btn">Subscribe</button>
      </form>
      <div class="outcome" id="card-errors">
        <!-- <div class="error"></div>
        <div class="success">
          Success! Your Stripe token is <span class="token"></span>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      email: ''
    }
  },
  methods: {
    submitForm (token) {
      const email = this.email
      axios.post('https://api.node.nyc/api/subscribe', { 
        token,
        email
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
    }
  },
  mounted () {
    const vm = this
    const stripe = window.Stripe('pk_live_JRQOwgvHFITgLlRGHDcpzio2')
    const elements = stripe.elements()

    // Create an instance of the card Element
    const cardNumber = elements.create('cardNumber', {})
    cardNumber.mount('#card-number')

    const cardExpiry = elements.create('cardExpiry', {})
    cardExpiry.mount('#card-expiry')

    const cardCvc = elements.create('cardCvc', {})
    cardCvc.mount('#card-cvc')

    const postalCode = elements.create('postalCode', {})
    postalCode.mount('#postal-code')

    // cardNumber.addEventListener('change', ({error}) => {
    //   document.getElementById('number-errors').textContent = error ? error.message : ''
    // })
    // cardExpiry.addEventListener('change', ({error}) => {
    //   document.getElementById('expiry-errors').textContent = error ? error.message : ''
    // })
    // cardCvc.addEventListener('change', ({error}) => {
    //   document.getElementById('cvc-errors').textContent = error ? error.message : ''
    // })
    // postalCode.addEventListener('change', ({error}) => {
    //   document.getElementById('postal-code-errors').textContent = error ? error.message : ''
    // })

    // cardNumber.on('change', function(e) {
    //   vm.setOutcome(e)
    // })
    // cardExpiry.on('change', function(e) {
    //   vm.setOutcome(e)
    // })
    // cardCvc.on('change', function(e) {
    //   vm.setOutcome(e)
    // })

    // Create a token or display an error when the form is submitted.
    const form = document.getElementById('payment-form')
    form.addEventListener('submit', async (e) => {
      e.preventDefault()

      const {token, error} = await stripe.createToken(cardNumber)

      if (error) {
        document.getElementById('card-errors').textContent = error.message
      } else {
        console.log('get token')

        document.getElementById('card-errors').textContent = 'Success!'
        vm.submitForm(token)
      }
    })
  }
}
</script>

<style scoped>
.subscription {
  background-color: #f6f9fc;
  height: 100vh;
}
.subscription .header {
  background: #212121;
  height: 60px;
  text-align: center;
}
.header .logo {
  margin-top: 10px;
  height: 40px;
}

.container {
  margin: auto;
  padding: 40px 24px;
  max-width: 400px;
}
.form-title {
  color: #32325d;
  font-weight: 400;
  line-height: 50px;
  font-size: 30px;
  margin: 20px 0;
  padding: 0;
}
label {
  color: #6b7c93;
  font-weight: 300;
  letter-spacing: 0.025em;
}
.input-box,
.StripeElement {
  display: block;
  margin: 10px 0 20px 0;
  max-width: 500px;
  padding: 10px 14px;
  border: #eee;
  background: #fff;
}
.input-box {
  height: 36px;
  border: 1px solid #ddd;
}
.email-container {
  position: relative;
}
.email-box {
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 0 15px;
  height: 36px;
  width: 100%;
  background: transparent;
  border: none;
  font-family: sans-serif;
  font-size: 1em;
  line-height: 1.2em;
  outline: none;
}
.submit-btn {
  margin-top: 10px;
  padding: 0 14px;
  height: 40px;
  background: #D90086;
  border: none;
  font-size: 15px;
  line-height: 40px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  color: #fff;
  -webkit-transition: all 150ms ease;
  transition: all 150ms ease;
  outline: none;
}
</style>
