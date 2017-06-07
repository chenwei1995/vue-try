<template>
  <div class="home">
    <ul>
      <li v-for="a in author">
        <router-link to="/details">
          <div class="pic"></div>
          <div class="txt">
            <h4>{{a.name}}</h4>
            <p>{{a.slogan}}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'index',
  computed: {
    ...mapState({
      author: state => state.SelectStore.author
    })
  }
}
</script>
<style lang="scss">
  .home{
    margin: 5px 0;

    li{
      height: 100%;
      margin: 10px 5px;
      overflow: hidden;

      a{
        overflow: hidden;
        color: #666;
      }

      .pic{
        width: 20%;
        height: 20vw;
        float: left;
        background-color: #eee;
      }

      .txt{
        float: right;
        width:78%;

        h4{
          line-height: 24px
        }

        p{
          font-size: 14px;
          line-height: 20px;
          margin-top: 1vw
        }
      }
    }
  }
</style>
