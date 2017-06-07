<template>
  <div class="page">
    v-enter: 定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除。 <br>
v-enter-active: 定义进入过渡的结束状态。在元素被插入时生效，在 transition/animation 完成之后移除。<br>
v-leave: 定义离开过渡的开始状态。在离开过渡被触发时生效，在下一个帧移除。<br>
v-leave-active: 定义离开过渡的结束状态。在离开过渡被触发时生效，在<br> transition/animation 完成之后移除。
  </div>
</template>
<script>
export default {
  name: 'page'
}
</script>
<style lang="scss">
  .page{
    padding: 10px;
    font-size: 14px;
    line-height: 32px;
  }
</style>
