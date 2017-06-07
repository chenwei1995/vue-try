<template>
  <transition name="dis">
    <div class="detail">
      <div class="bigPic"></div>
      <div class="txt"></div>
      <div class="txt"></div>
      <div class="txt"></div>
      <div class="txt"></div>
      <div class="txt"></div>
      <div class="txt"></div>
      <div class="txt"></div>
      <div class="txt"></div>
      <div class="txt"></div>
      <div class="content">
        当show = true时:

这里的fold-enter，是在元素显示的一瞬间被加入，然后瞬间被移除，在上面的例子中，example这个块状元素本来因为有了transform: translate3d(0, -100px, 0)这个样式，所以被上移了100px,但是因为fold-enter，所以将example这个块状元素移到了原位，但是fold-enter因为瞬间就被移除掉了，所以这时候的元素的样式又变成了transform: translate3d(0, -100px, 0),但是这时候fold-enter-active这个样式就生效了，因为设置了transition: all .5s,所以元素会在0.5s的时间内上移100px,在过渡动画结束之后,fold-enter-active这个类马上被移除.

当show = false时:

example不会马上消失，这个时候fold-leave-active这个类就起作用了,example这时的位置是在-100px，fold-leave-active定义的是过渡的结束状态：transform: translate3d(0, 0, 0);，但是同时又设置了transition: all .5s，所以这时元素会在0.5s的时间内下移100px.之后fold-leave-active被移除.
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'detail'
}
</script>
<style lang="scss">
  .detail{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform: translate3d(0, 0, 0);
    background-color: #fff;

    .bigPic{
      background-color: #eee;
      width: 100%;
      height: 25vw;
    }

    .txt{
      height: 30px;
      background-color: #eee;
      margin-top: 5px;
    }

    .content{
      background-color: #eee;
      padding: 10px;
      font-size: 14px;
      margin-top: 5px;
    }

  }
  .dis-enter-active, .dis-leave-active {
    transition: all .5s;
  }
  .dis-enter, .dis-leave-active {
      transform: translate3d(100%, 0, 0);
  }
</style>
