<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
html {
  font-size: 62.5%;
}

body {
  color: #333;
  font-size: 1.2rem;
  font-family: "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
}

*, *::before, *::after {
  box-sizeing: border-box;
}

a:link, a:visited, a:hover, a:active {
  color: #d03c56;
  text-decoration: none;
}
</style>
