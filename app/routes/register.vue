<template lang="html">
  <div class="">
    <div class="section register-main">
      <div class="container">
        <div class="card register-card">
          <h1 class="register-card__heading">Create an Account</h1>
          <form action="submit" class="register-card__form">
            <p class="register-card__username register-card__title">Username</p>
            <p>
              <input type="text" name="username" class="input">
            </p>
            <p class="register-card__email register-card__title">Email</p>
            <p>
              <input type="text" name="email" class="input">
            </p>
            <p class="register-card__password register-card__title">Password</p>
            <p>
              <input type="text" name="password" class="input">
            </p>
            <div class="register-card__buttons">
              <a href="#"><button type="button" name="login">Login</button></a>
              <a href="#"><button type="button" name="sign-up">Sign Up</button></a>
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
    };
  },

  methods: {

  },
};
</script>
