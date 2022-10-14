<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/ten-cards-test">Test(10)</router-link> |
      <router-link to="/one-hundred-cards-test">Test(100)</router-link> |
      <router-link to="/one-thousand-cards-test">Test(1000)</router-link> |
      <router-link to="/five-thousand-cards-test">Test(5000)</router-link> |
      <router-link to="/ten-thousand-cards-test">Test(10000)</router-link> |
      <router-link to="/twenty-thousand-cards-test">Test(20000)</router-link> |
      <router-link to="/thirty-thousand-cards-test">Test(30000)</router-link> |
      <router-link to="/fifty-thousand-cards-test">Test(50000)</router-link> |||
      <router-link to="/ten-thousand-cards-conditional-test">Test-conditional(10000)</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
