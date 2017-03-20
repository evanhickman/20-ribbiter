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
              <input type="password" class="input">
            </p>
            <div class="form-card__buttons">
              <router-link :to="{ name: 'register' }" class="button is-info">Register</router-link>
              <router-link :to="{ name: 'ribbits' }"><button type="submit" class="button is-success">Login</button></router-link>
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
      error: false,
      formValues: {
        username: '',
        password: '',
      },
    };
  },

  methods: {
    save() {
      fetch('url', {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(this.formValues)
      }).then((res) => {
        if (res.ok) {
          return res.json();
        }

        // Still want error handling
        return Promise.reject(res.json());
      }).then((data) => {
        localStorage.jwt = data.token;
      }).catch(() => {
        this.error = true;
      });
    }
  },
};
</script>
