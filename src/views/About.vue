<template>
  <div>
    <header class="header">
      <p class="site-title-sub">Web designer's portfolio</p>
      <h1 class="site-title">HI, MY NAME IS...</h1>
      <p class="site-description">Check out some of my works.</p>
      <div class="buttons">
        <a class="button" href="#about">LEARN MORE</a>
        <a class="button-showy" href="#contact">SEND MESSAGE</a>
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
      <h2 class="heading">CONTACT</h2>
      <form class="contact-form">
        <input type="text" name="name" placeholder="NAME">
        <textarea name="message" PLACEHOLDER="MESSAGE"></textarea>
        <input type="submit" value="SEND">
      </form>
    </section>
    <footer class="footer">
      © sample site
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

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
}

a:link, a:visited, a:hover, a:active {
  color: #fff;
  text-decoration: none;
}

.header {
  padding: 170px 30px 80px;

  @media (max-width: 768px) {
    padding-top: 60px;
  }
}

.site-title-sub {
  margin: 0 0 30px;
  letter-spacing: 1px;
  font-size: 2.2rem;

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
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

  @media (max-width: 768px) {
    display: block;
    width: 80%;
    margin: 10px auto;
  }
}

.site-title {
  margin: 50px 0 40px;
  font-size: 7.6rem;

  @media (max-width: 768px) {
    margin-top: 35px;
    font-size: 4rem;
  }
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

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
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

  @media (max-width: 768px) {
    line-height: 1.8;
  }
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

  @media (max-width: 768px) {
    display: block;
  }
}
  
.work-box {
  position: relative;
  display: table-cell;

  @media (max-width: 768px) {
    display: block;
  }
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

  @media (max-width: 768px) {
    top: 0;
    height: 100%;
    background-size: cover;
  }
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

  @media (max-width: 768px) {
    display: none;
  }
}

.work-description {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 50%;
  z-index: 1;

  @media (max-width: 768px) {
    position: relative;
  }
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

  @media (max-width: 768px) {
    display: block;
  }
}

.skill-box {
  display: table-cell;

  @media (max-width: 768px) {
    display: block;
    margin: 40px auto;
  }
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

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    font-size: 5rem;
    line-height: 92px;
  }
}

.skill-title {
  margin: 0 20px 20px;
  font-size: 2rem;
}

.skill-text {
  margin: 0 20px;
  line-height: 2;

  @media (max-width: 768px) {
    margin: 0;
  }
}

.contact {
  padding: 80px 0 150px;
}

.contact-form {
  width: 50%;
  margin: 50px auto 0;

  @media (max-width: 768px) {
    width: 80%;
    padding-bottom: 80px;
  }

  input[type=text], textarea {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    padding: 15px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 0;
    background-color: rgba(255, 2555, 2555, 0.05);
    color: #fff;
    outline: none;
  }

  input[type=text]:focus, textarea:focus {
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.5) inset;

  }

  textarea {
    height: 150px;
  }

  input[type=submit] {
    display: block;
    width: 200px;
    margin: 40px auto 0;
    padding: 15px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 5px;
    background-color: transparent;
    color: rgba(255, 255, 255, 0.6);
    cursor: pointer;
  }

  input[type=submit]:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
}

.footer {
  padding: 12px 0;
  font-size: 1.3rem;
  background-color: #333;
  width: 100%;
}
</style>
