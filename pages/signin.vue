<template>
  <b-form class="form-signin" @submit="onSubmit">
    <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
    <b-form-input
      id="inputEmail"
      v-model="form.email"
      type="email"
      required
      placeholder="Enter email"
    />
    <b-form-input
      id="inputPassword"
      v-model="form.password"
      type="password"
      required
      placeholder="Password"
    />
    <b-form-group id="input-group-3" class="checkbox mb-3">
      <b-form-checkbox v-model="form.remember">Remember me</b-form-checkbox>
    </b-form-group>
    <b-button type="submit" class="button--green form-signin-button" size="lg" block>Sign in</b-button>
  </b-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: 'foo@bar.com',
        password: '123456789',
        remember: false
      }
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      // console.log(JSON.stringify(this.form))
      this.$router.push('/overview')
    }
  }
}
</script>

<style scoped>
.form-signin-button {
  background-color: transparent;
}
.form-signin-button:hover {
  color: #fff;
  background-color: #3b8070;
}
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 80px auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type='email'] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type='password'] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
