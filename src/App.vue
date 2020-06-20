<template>
  <div id="app">
    <vuejs-typist :words="words"/>
  </div>
</template>

<script>
import vuejsTypist from './components/vuejs-typist'

export default {
  name: 'App',
  components: {
    vuejsTypist
  },
  data(){
    return {
      words: ['hello', 'bonjour']
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
