<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

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
