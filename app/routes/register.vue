<template lang="html">
  <div class="">
    <div class="section content-center has-bg">
      <div class="container">
        <div class="card form-card">
          <h1 class="form-card__heading">Create an Account</h1>
          <form @submit.prevent="submit" class="form-card__form">
            <p class="form-card__username form-card__title">Username</p>
            <p>
              <input type="text" v-model="formValues.username" class="input">
            </p>
            <p class="form-card__email form-card__title">Email</p>
            <p>
              <input type="text" v-model="formValues.email" class="input">
            </p>
            <p class="form-card__password form-card__title">Password</p>
            <p>
              <input type="password" v-model="formValues.password" class="input">
            </p>
            <div class="form-card__buttons">
              <router-link :to="{ name: 'login' }" class="button is-info">Login</router-link>
              <router-link :to="{ name: 'login' }"><button type="submit" class="button is-success">Sign Up</button></router-link>
            </div>
          </form>
        </div>
        <div v-if="users.loading === 'error'" class="error-card">
          <h3>Sorry, an error occurred! Try again</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store';
import userResource from '../resources/user';
const { actionCreators: { create } } = userResource;
export default {
  name: 'Register',
  data() {
    return {
      formValues: {
        username: '',
        email: '',
        password: '',
      },
      users: this.$select('users'),
    };
  },

  methods: {
    submit() {
      // Dispatch a new create action
      store.dispatch(create(this.formValues)).then(() => {
        this.$router.push({ name: 'login' });
      }).catch(() => {});
    },
  },
};
</script>
