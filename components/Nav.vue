<template>
  <div v-show="show">
    <b-navbar variant="dark" type="dark">
      <b-link to="/" tag="h1" class="navbar-brand">PIW</b-link>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-link v-show="showLoginLink" to="login" class="nav-link">Login</b-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      show: true,
      showLoginLink: true
    }
  },
  watch: {
    $route() {
      // Check if given route is true, if it is then hide Nav.
      if (this.$route.path.startsWith('/login')) {
        this.show = false
      } else {
        this.show = true
      }

      if (this.$route.path.startsWith('/overview')) {
        this.showLoginLink = false
      } else {
        this.showLoginLink = true
      }
    }
  }
})
</script>
