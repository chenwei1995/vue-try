<template>
  <header class="head">
    <router-link to="/">menu one</router-link>
    <router-link to="/page">menu two</router-link>
  </header>
</template>

<script>

export default {
  name: 'head'
}
</script>

<style media="screen" lang='scss'>
  .head{
    width: 100%;
    font-size: 0;
    text-align: center;

    a{
      color: #666;
      display: inline-block;
      font-size: 14px;
      width: 50%;
      line-height: 45px;
      background-color: #eee;
      text-transform: capitalize;
    }

    .router-link-exact-active{
      color: #eee;
      background-color: #4aa1f2;
    }
  }
</style>
