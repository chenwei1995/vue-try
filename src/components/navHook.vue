<template>
  <div class="navHooks">
    <app-nav></app-nav>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHead from '@/components/public/Head'
import AppFoot from '@/components/public/Foot'

export default {
  name: 'navHooks',
  components: {
    'app-nav': AppHead,
    'app-footer': AppFoot
  }
}
</script>
