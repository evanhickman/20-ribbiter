<template lang="html">
  <div class="">
    <div class="section content-center has-bg">
      <div class="container">
        <div class="card form-card">
          <h1 class="form-card__heading">Login</h1>
          <form @submit.prevent="submit" class="form-card__form">
            <p class="form-card__email form-card__title">Email</p>
            <p>
              <input type="text" class="input">
            </p>
            <p class="form-card__password form-card__title">Password</p>
            <p>
              <input type="text" class="input">
            </p>
            <div class="form-card__buttons">
              <router-link :to="{ name: 'register' }"><button type="button" class="button is-info">Register</button></router-link>
              <a href="#"><button type="submit" class="button is-success">Login</button></a>
            </div>
          </form>
        </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
