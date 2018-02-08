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
        <div class="input-group">
          <label for="card-number">Card number</label>
          <div class="input-box" id="card-number"></div>
          <div id="number-errors" role="alert"></div>
        </div>
        <div class="input-group">
          <label for="card-expiry">Expiration Date</label>
          <div class="input-box" id="card-expiry"></div>
          <div id="expiry-errors" role="alert"></div>
        </div>
        <div class="input-group">
          <label for="card-cvc">CVC</label>
          <div class="input-box" id="card-cvc"></div>
          <div id="cvc-errors" role="alert"></div>
        </div>
        <div class="input-group">
          <label for="postal-code">postal-code</label>
          <div class="input-box" id="postal-code"></div>
          <div id="postal-code-errors" role="alert"></div>
        </div>
        <div class="input-group email-container">
          <label for="email">Email</label>
          <div class="input-box" id="email">
            <input class="email-box" type="email" placeholder="Email">
          </div>
        </div>
      </form>
      <button class="submit-btn" @click="submitForm()">Subscribe</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    getInputStyle () {
      return {
        base: {
          border: '1px solid #212121'
        },
        invalid: {
          border: '1px solid #eee'
        }
      }
    },
    submitForm () {
      const test = axios.get('http://localhost:9090/test')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      // console.log(test)
    }
  },
  mounted () {
    const vm = this
    const stripe = window.Stripe('pk_test_9LwRCAa8O0Jk4P00ddMqMd5K')
    const elements = stripe.elements()

    // Create an instance of the card Element
    const cardNumber = elements.create('cardNumber', {})
    const cardExpiry = elements.create('cardExpiry', {})
    const cardCvc = elements.create('cardCvc', {})
    const postalCode = elements.create('postalCode', {})

    // Add an instance of the card Element into the `card-element` <div>
    cardNumber.mount('#card-number')
    cardExpiry.mount('#card-expiry')
    cardCvc.mount('#card-cvc')
    postalCode.mount('#postal-code')

    // cardNumber.addEventListener('change', ({error}) => {
    //   const displayError = document.getElementById('card-errors')
    //   if (error) {
    //     displayError.textContent = error.message
    //   } else {
    //     displayError.textContent = ''
    //   }
    // })

    // // Create a token or display an error when the form is submitted.
    // const form = document.getElementById('payment-form')
    // form.addEventListener('submit', async (event) => {
    //   event.preventDefault()

    //   const {token, error} = await stripe.createToken(card)

    //   if (error) {
    //     // Inform the customer that there was an error
    //     const errorElement = document.getElementById('card-errors')
    //     errorElement.textContent = error.message
    //   } else {
    //     // Send the token to your server
    //     stripeTokenHandler(token)
    //   }
    // })

    // const stripeTokenHandler = (token) => {
    //   // Insert the token ID into the form so it gets submitted to the server
    //   const form = document.getElementById('payment-form')
    //   const hiddenInput = document.createElement('input')
    //   hiddenInput.setAttribute('type', 'hidden')
    //   hiddenInput.setAttribute('name', 'stripeToken')
    //   hiddenInput.setAttribute('value', token.id)
    //   form.appendChild(hiddenInput)

    //   // Submit the form
    //   form.submit()
    // }
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
