<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import AppHead from '@/components/public/Head'
export default {
  name: 'app'
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  list-style: none;
}
a{
  text-decoration: none;
}
#app {
  max-width: 640px;
  margin: 0 auto;
}
</style>
