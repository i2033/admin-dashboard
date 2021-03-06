<style>
body {
  background: #f002;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding-bottom: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/console">console</router-link>
      |
      <router-link to="/workspace">workspace</router-link>
    </div>
    <RouterView/>
  </div>
</template>
