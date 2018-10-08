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
      <h2 class="heading">ABOUT ME</h2>
      <p class="about-text">
        はじめまして。日本でWebデザイナーをしています。<br>
        デザインの専門が後を卒業し、制作会社で業務経験を経て、現在はフリーランスとして働いています。
      </p>
    </section>
    <section class="works">
      <h2 class="heading">WORKS</h2>
      <div class="works-wrapper">
        <div class="work-box tree">
          <img class="work-image" src="../assets/coding.jpg" alt="コーディング画面">
          <div class="work-description">
            <div class="work-description-inner">
              <p class="work-text">
                ひとつめの制作事例が入ります。<br/>
                簡単な説明が入ります。<br/>
                使用ツール：xxx, xxx, xxx<br/>
                <a href="#" class="button button-ghost">READ MORE</a>
              </p>
            </div>
          </div>
        </div>
        <div class="work-box building">
          <img class="work-image" src="../assets/coding.jpg" alt="コーディング画面">
          <div class="work-description">
            <div class="work-description-inner">
              <p class="work-text">
                ひとつめの制作事例が入ります。<br/>
                簡単な説明が入ります。<br/>
                使用ツール：xxx, xxx, xxx<br/>
                <a href="#" class="button button-ghost">READ MORE</a>
              </p>
            </div>
          </div>
        </div>
        <div class="work-box lake">
          <img class="work-image" src="../assets/coding.jpg" alt="コーディング画面">
          <div class="work-description">
            <div class="work-description-inner">
              <p class="work-text">
                ひとつめの制作事例が入ります。<br/>
                簡単な説明が入ります。<br/>
                使用ツール：xxx, xxx, xxx<br/>
                <a href="#" class="button button-ghost">READ MORE</a>
              </p>
            </div>
          </div>
        </div>
        <div class="work-box sky">
          <img class="work-image" src="../assets/coding.jpg" alt="コーディング画面">
          <div class="work-description">
            <div class="work-description-inner">
              <p class="work-text">
                ひとつめの制作事例が入ります。<br/>
                簡単な説明が入ります。<br/>
                使用ツール：xxx, xxx, xxx<br/>
                <a href="#" class="button button-ghost">READ MORE</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="skills">
      <h2 class="heading">MY SKILLS</h2>
      <div class="skills-wrapper">
        <div class="skill-box">
          <i class="skill-icon">★</i>
          <div class="skill-title">DESIGN</div>
          <p class="skill-text">
            見た目の綺麗さだけじゃなくて、<br/>
            使いやすさ、情報の伝わりやすさなど、<br/>
            その先まで考えることを意識しています。
          </p>
        </div>
        <div class="skill-box">
          <i class="skill-icon">★</i>
          <div class="skill-title">DESIGN</div>
          <p class="skill-text">
            見た目の綺麗さだけじゃなくて、<br/>
            使いやすさ、情報の伝わりやすさなど、<br/>
            その先まで考えることを意識しています。
          </p>
        </div>
        <div class="skill-box">
          <i class="skill-icon">★</i>
          <div class="skill-title">DESIGN</div>
          <p class="skill-text">
            見た目の綺麗さだけじゃなくて、<br/>
            使いやすさ、情報の伝わりやすさなど、<br/>
            その先まで考えることを意識しています。
          </p>
        </div>
      </div>
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

.about {
  padding: 80px 30px;
  background-color: #fff;
  color: #333;
}

.heading {
  position: relative;
  display: inline-block;
  margin: 30px 0 15px;
  padding-bottom: 15px;
  letter-spacing: 2px;
  font-size: 4rem;
}

.heading::before, .heading::after {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  border-bottom: 1px solid #999;
}

.heading::before {
  bottom: 5px
}

.about-text {
  margin: 30px 0;
  line-height: 2.5;
}

.works {
  background-color: #383634;
  padding: 80px 0;
}

.works-wrapper {
  display: table;
  width: 100%;
  margin-top: 60px;
  table-layout: fixed;
}
  
.work-box {
  position: relative;
  display: table-cell;
}

.work-box::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 50%;
  background: no-repeat;
  background-size: 100% 100%;
  opacity: 0.2;
  transform: scaleY(-1);
}

.work-box.tree::after {
  background-image: url("../assets/bg-news.png") ;
}

.work-box.building::after {
  background-image: url("../assets/bg-header.png") ;
}

.work-box.lake::after {
  background-image: url("../assets/logo.png") ;
}

.work-box.sky::after {
  background-image: url("../assets/coding.jpg") ;
}

.work-box:nth-child(odd) .work-image {
  margin: 60% 0 0;
}

.work-box:nth-child(odd) .work-description,
.work-box:nth-child(odd)::after {
  top: 0;
}

.work-image {
  display: block;
  width: 100%;
  margin: 0 0 70%;
}

.work-description {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 50%;
  z-index: 1;
}

.work-description-inner {
  display: table;
  width: 100%;
  height: 100%;
  padding: 20px;
}

.work-text {
  display: table-cell;
  vertical-align: middle;
  font-size: 1.2rem;
  line-height: 2;

  .button {
    width: 60%;
    margin-top: 20px;
    padding: 3px;
  }
}

.button-ghost {
  border: 1px solid #fff;
  background-color: rgba(255, 255, 255, 0.15);
}

.skills {
  padding: 80px 0;
  background-color: #fff;
  color: #333;
}

.skills-wrapper {
  display: table;
  width: 80%;
  margin: 50px auto 0;
  table-layout: fixed;
}

.skill-box {
  display: table-cell;
}

.skill-icon {
  width: 200px;
  height: 200px;
  margin-bottom: 30px;
  border: 4px solid;
  border-radius: 50%;
  color: #f1b400;
  font-size: 8rem;
  line-height: 142px;
}

.skill-title {
  margin: 0 20px 20px;
  font-size: 2rem;
}

.skill-text {
  margin: 0 20px;
  line-height: 2;
}
</style>
