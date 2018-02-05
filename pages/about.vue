<template>
  <div class="about">
    <div class="about-header">
      <div class="brand">
        <nuxt-link to="/">
          <img class="logo" src="~/assets/node_logo.png" alt="brand logo">
        </nuxt-link>
        <ul class="navbar">
          <li class="navItem"><nuxt-link to="/">HOME</nuxt-link></li>
          <li class="navItem"><a href="/#apply-form">APPLY</a></li>
        </ul>
      </div>
    </div>
    <div class="description">
      NODE is being created, designed and implemented as we speak. So far, these are the folks who have helped make it happen. We expect all NODE members to help us co-create amazing spaces and communities in the future.
    </div>
    <div class="members nyc">
      <div class="section-title">NODE NYC</div>
      <div class="cards-wrapper row">
        <div class="card column">
          <img src="~assets/photos/jason.jpg" alt="">
          <div class="name">JASON KENDE</div>
          <div class="summary">Founder of Byzantine Inc</div>
        </div>
        <div class="card column">
          <img src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/18767457_687065074826374_616921352001294411_n.jpg?oh=671d58a57654552f426445a7f1d77265&oe=5ADF68A2" alt="">
          <div class="name">SAM HUTCH</div>
          <div class="summary">Founder of Byzantine Inc</div>
        </div>
        <div class="card column">
          <img src="~assets/photos/layla.jpg" alt="">
          <div class="name">LAYLA TABATABAIE</div>
          <div class="summary">XXXXXXXXXX</div>
        </div>
      </div>
      <div class="cards-wrapper row">
        <div class="card column">
          <img src="~assets/photos/maomao.jpg" alt="">
          <div class="name">MAOMAO HU</div>
          <div class="summary">XXXXXXXXXX</div>
        </div>
        <!-- <div class="card column">
          <img src="~assets/photos/monicaq.jpg" alt="">
          <div class="name">MONICA QUAINTANCE</div>
          <div class="summary">XXXXXXXXXX</div>
        </div>
        <div class="card column">
          <img src="~assets/photos/alex.jpg" alt="">
          <div class="name">ALEX TODARO</div>
          <div class="summary">XXXXXXXXXX</div>
        </div> -->
      </div>
      <!-- <div class="cards-wrapper row">
        <div class="card column">
          <img src="~assets/photos/athena.jpg" alt="">
          <div class="name">ATHENA DIACONIS</div>
          <div class="summary">XXXXXXXXXX</div>
        </div>
        <div class="card column">
          <img src="~assets/photos/lori.jpg" alt="">
          <div class="name">LORI CORPUZ</div>
          <div class="summary">XXXXXXXXXX</div>
        </div>
        <div class="card column">
          <img src="~assets/photos/tamar.jpg" alt="">
          <div class="name">TAMAR NACHMANY</div>
          <div class="summary">XXXXXXXXXX</div>
        </div>
      </div> -->
    </div>
    <div class="members sf">
      <div class="section-title">NODE SF</div>
      <div class="cards-wrapper row">
        <div class="card column">
          <img src="~assets/photos/seth.jpg" alt="">
          <div class="name">Seth Goldstein</div>
          <div class="summary">In 2008, Seth created one of the first co-working spaces in SF at Pier 38.  Many great companies were born there, including Instagram.  </div>
        </div>
        <div class="card column">
          <img src="~assets/photos/miriam.jpg" alt="">
          <div class="name">Miriam McGovern</div>
          <div class="summary">Miriam is an artist, gallerist, event producer and art car manager. </div>
        </div>
        <div class="card column">
          <img src="~assets/photos/sean.jpg" alt="">
          <div class="name">Sean Hoge</div>
          <div class="summary">Sean is the managing partner at venturecoin.io  He finds and advises some of the best up and coming projects in the crypto space.</div>
        </div>
      </div>
      <div class="cards-wrapper row">
        <div class="card column">
          <img src="~assets/photos/monicap.jpg" alt="">
          <div class="name">Monica Puchner</div>
          <div class="summary">Monica is the CEO of HiLo, a new social network for crypto.  She is also the namesake of the character in Silicon Valley.</div>
        </div>
        <div class="card column">
          <img src="~assets/photos/steven.jpg" alt="">
          <div class="name">Steven Waterhouse (Seven)</div>
          <div class="summary">Dr Steven Waterhouse is a recognized innovator and leader in the emerging world of crypto, and is co-founder of Orchid.</div>
        </div>
        <div class="card column">
          <img src="~assets/photos/kristina.jpg" alt="">
          <div class="name">Kristina Goett</div>
          <div class="summary">Kristina is an accomplished interior designer, a beauty industry entrepreneur, and sometimes fit model for Levis.</div>
        </div>
      </div>
    </div>
    <div class="footer">Part of the <a href="https://nodeworldwide.com"><span class="highlight">Node Worldwide Network</span></a></div>
  </div>
</template>

<script>
</script>

<style scoped>
.about-header {
  position: relative;
  background: #000;
  padding: 20px 48px;
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

.description {
  margin: auto;
  padding: 40px 24px;
  width: 100%;
  max-width: 800px;
  font-family: "rational-light", sans-serif;
  font-size: 1.2em;
}

.members {
  margin: auto;
  max-width: 800px;
}
.section-title {
  padding: 40px 20px 10px;
  font-family: "arame-regular", sans-serif;
  font-size: 1.5em;
}
.cards-wrapper{
 display: flex;
}
.card {
  padding: 20px;
  flex: 1;
  max-width: 266px;
}
.card img {
  width: 100%;
}
.name {
  margin: 10px 0 5px;
  font-size: 1em;
}
.summary {
  font-size: .8em;
  color: #616161;
}

@media (max-width: 767px) {
  .row {
    display: block;

  }
  .column {
    margin: 20px auto;
    max-width: 100%;
  }
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
</style>
