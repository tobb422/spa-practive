<template>
  <div>
    <header class="header">
      <p class="site-title-sub">Web designer's portfolio</p>
      <h1 class="site-title">HI, MY NAME IS...</h1>
      <p class="site-description">Check out some of my works.</p>
      <div class="buttons">
        <a class="button" href="#about">LEARN MORE</a>
        <a class="button-showy" href="contact">SEND MESSAGE</a>
      </div>
    </header>
    <section class="about" id="about">
    </section>
    <section class="works">
    </section>
    <section class="skills">
    </section>
    <section class="contact" id="contact">
    </section>
    <footer class="footer">
    </footer>
  </div>
</template>

<style lang="scss">
html {
  font-size: 62.5%;
}

body {
  background: #151515;
  color: #fff;
  text-align: center;
  font-size: 1.4rem;
  font-family: "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
}

a:link, a:visited, a:hover, a:active {
  color: #fff;
  text-decoration: none;
}

.header {
  padding: 170px 30px 80px;
}

.site-title-sub {
  margin: 0 0 30px;
  letter-spacing: 1px;
  font-size: 2.2rem;
}

.site-title-sub::before,
.site-title-sub::after {
  content: '';
  display: inline-block;
  width: 140px;
  height: 2px;
  margin: 0 30px;
  background-color: #fff;
  vertical-align: middle;
}

.site-title {
  margin: 50px 0 40px;
  font-size: 7.6rem;
}

.site-description {
  margin-bottom: 50px;
  color: #888;
  font-size: 1.6rem;
}

.button {
  display: inline-block;
  width: 200px;
  padding: 20px;
  border-radius: 4px;
  background-color: #afa58d;
  color: #fff;
  text-decoration: none;
  letter-spacing: 1px;
  font-size: 1.2rem;
}

.button:hover {
  opacity: 0.9;
}

.button-showy {
  @extend .button;
  background-color: #f1b400;
}

.buttons .button {
  margin: 10px;
}
</style>
