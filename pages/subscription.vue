<template>
  <div class="subscribe">
    <div class="header">
      <nuxt-link to="/">
        <img class="logo" src="~/assets/node_logo.png" alt="brand logo">
      </nuxt-link>
    </div>
    <div class="container">
      <form id="payment-form">
        <div>Your credit or debit card</div>
        <div class="input-group">
          <label for="card-number">Card Number</label>
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
        <button>Submit Payment</button>
      </form>
    </div>
    <!-- <form action="/charge" method="post">
      <div class="form-row">
        <label for="card-element">
          Credit or debit card
        </label>
        <div id="card-element">
        </div>
      </div>
    </form> -->
  </div>
</template>

<script>
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
    }
  },
  mounted () {
    const vm = this
    const stripe = window.Stripe('pk_test_9LwRCAa8O0Jk4P00ddMqMd5K')
    const elements = stripe.elements()

    // Custom styling can be passed to options when creating an Element.
    const style = {
      base: {
        // Add your base input styles here. For example:
        fontSize: '16px',
        color: "#32325d",
      },
    }

    // Create an instance of the card Element
    const cardNumber = elements.create('cardNumber', {style: vm.getInputStyle()})
    const cardExpiry = elements.create('cardExpiry', {style: vm.getInputStyle()})
    const cardCvc = elements.create('cardCvc', {style: vm.getInputStyle()})

    // Add an instance of the card Element into the `card-element` <div>
    cardNumber.mount('#card-number')
    cardExpiry.mount('#card-expiry')
    cardCvc.mount('#card-cvc')

    cardNumber.addEventListener('change', ({error}) => {
      const displayError = document.getElementById('card-errors')
      if (error) {
        displayError.textContent = error.message
      } else {
        displayError.textContent = ''
      }
    })

    // Create a token or display an error when the form is submitted.
    const form = document.getElementById('payment-form')
    form.addEventListener('submit', async (event) => {
      event.preventDefault()

      const {token, error} = await stripe.createToken(card)

      if (error) {
        // Inform the customer that there was an error
        const errorElement = document.getElementById('card-errors')
        errorElement.textContent = error.message
      } else {
        // Send the token to your server
        stripeTokenHandler(token)
      }
    })

    const stripeTokenHandler = (token) => {
      // Insert the token ID into the form so it gets submitted to the server
      const form = document.getElementById('payment-form')
      const hiddenInput = document.createElement('input')
      hiddenInput.setAttribute('type', 'hidden')
      hiddenInput.setAttribute('name', 'stripeToken')
      hiddenInput.setAttribute('value', token.id)
      form.appendChild(hiddenInput)

      // Submit the form
      form.submit()
    }
  }
}
</script>

<style scoped>
.subscribe .header {
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
.input-box {
  height: 30px;
  width: 100%;
  border: 1px solid #212121;
}
</style>
