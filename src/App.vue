<template>
  <router-view></router-view>
</template>

<script>
import AppHeader from './components/layout/AppHeader';
import AppMain from './components/layout/AppMain';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
  },
}

</script>

<style>
  html, body, #app {
    margin: 0;
    padding: 0;
    background: #fafafa;
  }

  * {
    outline: transparent;
  }
</style>

