``<template lang="html">
  <div class="">
    <div class="section register-main">
      <div class="container">
        <div class="card register-card">
          <h1 class="register-card__heading">Create an Account</h1>
          <form @submit.prevent="submit" class="register-card__form">
            <p class="register-card__username register-card__title">Username</p>
            <p>
              <input type="text" v-model="formValues.username" class="input">
            </p>
            <p class="register-card__email register-card__title">Email</p>
            <p>
              <input type="text" v-model="formValues.email" class="input">
            </p>
            <p class="register-card__password register-card__title">Password</p>
            <p>
              <input type="text" v-model="formValues.password" class="input">
            </p>
            <div class="register-card__buttons">
              <a href="#"><button type="button" name="login" class="button button__login">Login</button></a>
              <a href="#"><button type="button" name="sign-up" class="button button__signup">Sign Up</button></a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      formValues: {
        username: '',
        email: '',
        password: '',
      }
    };
  },

  methods: {

  },
};
</script>
