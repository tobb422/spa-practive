<template>
  <footer class="footer">
    <ul class="horizontal-list">
      <li class="horizontal-item"><a href="#">ABOUT ME</a></li>
      <li class="horizontal-item"><a href="#">SITE MAP</a></li>
      <li class="horizontal-item"><a href="#">SNS</a></li>
      <li class="horizontal-item"><a href="#">CONTACT</a></li>
    </ul>
    <p class="copyright">Copryright © 2015 SMPLE SITE</p>
  </footer>
</template>

<script>
export default { name: "Footer" };
</script>

<style lang="scss">
.footer {
  width: 100%;
  padding: 20px 0 30px;
  background-color: #2d3d54;
  color: #fff;
}

.horizontal-list {
  width: 970px;
  margin: 0 auto;
  text-align: right;
  font-size: 0;

  .horizontal-item {
    display: inline-block;
    padding: 0 15px;
    letter-spacing: 1px;
  }

  .horizontal-item + .horizontal-item {
    border-left: 1px solid #bbb;
  }

  .horizontal-item a {
    border-bottom: 1px dashed #777;
    color: #bbb;
    font-size: 1.1rem;
    transition: color 0.15s;
  }

  .horizontal-item a:hover {
    color: #ddd;
  }
}

.copyright {
  margin-top: 30px;
  text-align: center;
  letter-spacing: 1px;
}
</style>
