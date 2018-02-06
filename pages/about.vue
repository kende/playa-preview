<template>
  <div class="about">
    <div class="about-header">
      <div class="brand">
        <nuxt-link to="/">
          <img class="logo" src="~/assets/node_logo.png" alt="brand logo">
        </nuxt-link>
        <ul class="navbar">
          <li class="navItem"><nuxt-link to="/">HOME</nuxt-link></li>
          <li class="navItem apply-link"><a href="https://byzantine.typeform.com/to/fXpCQa" target="_blank">APPLY</a></li>
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
          <div class="summary">Jason has been building community for several decades and is now co-founder and CEO of Byzantine, a new blockchain company building all things decentralized.</div>
        </div>
        <div class="card column">
          <img src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/18767457_687065074826374_616921352001294411_n.jpg?oh=671d58a57654552f426445a7f1d77265&oe=5ADF68A2" alt="">
          <div class="name">SAM HUTCH</div>
          <div class="summary">Sam is a UX / Product Designer and co-founder of Byzantine, a new blockchain company building all things decentralized.</div>
        </div>
        <div class="card column">
          <img src="~assets/photos/layla.jpg" alt="">
          <div class="name">LAYLA TABATABAIE</div>
          <div class="summary">Layla is a New York attorney, author, and digital marketer. She's an advisor to CanYa, Bellhop, Byzantine, and Node NYC.</div>
        </div>
      </div>
      <div class="cards-wrapper row">
        <div class="card column">
          <img src="~assets/photos/maomao.jpg" alt="">
          <div class="name">MAOMAO HU</div>
          <div class="summary">Maomao is a co-founder at Kora, which is focused on bringing financial freedom to as many people as possible.</div>
        </div>
        <div class="card column">
          <img src="~assets/photos/steve.jpg" alt="">
          <div class="name">STEVE DEAN</div>
          <div class="summary">Steve is an NYC-based superconnector who specializes in matching people to new careers, homes, workspaces, communities and romantic partners.</div>
        </div>
        <div class="card column">
          <img src="~assets/photos/nadia.png" alt="">
          <div class="name">NADIA CHILMONIK</div>
          <div class="summary">Nadia is an expert with data, algorithms, and design. In her spare time, she also a paints, teaches machine learning, creates VR art, and is a NASA Datanaut.</div>
        </div>
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
    <div class="footer">Node:02 in the Node Network 🦄 <a href="https://nodeworldwide.com"><span class="highlight">Return to Node:01</span></a></div>
    <div class="policies">
        <a href="https://app.termly.io/document/terms-of-use-for-saas/c434d77d-667b-4b76-bb03-a69230544d07" target="_blank"><span class="highlight">Terms of Service</span></a> & <a href="https://app.termly.io/document/privacy-policy-for-website/a84c7ecf-d07a-47bd-b714-ff63bab2f3ab" target="_blank"><span class="highlight">Privacy Policy</span></a>
    </div>
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
  font-family: "arame-regular", sans-serif;
}
.summary {
  font-size: .7em;
  color: #212121;
  font-family: "rational-light", sans-serif;
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
@media (max-width: 425px) {
  .apply-link{
    display: none;
  }
}

.footer {
  padding: 40px 0 0 0;
  font-size: 10px;
  color: #212121;
  text-align: center;
  font-family: "rational-light", sans-serif;
}
.footer a {
  color: #212121;
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
  font-family: "rational-light", sans-serif;
}
.policies a {
  color: #212121;
  text-decoration: none;
}
.policies a:hover {
  text-decoration: underline;
}
</style>
