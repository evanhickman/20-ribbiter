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
              <input type="text" v-model="formValues.password" class="input">
            </p>
            <div class="form-card__buttons">
              <router-link :to="{ name: 'login' }"><button type="button" name="login" class="button is-info">Login</button></router-link>
              <a href="#"><button type="submit" name="sign-up" class="button is-success">Sign Up</button></a>
            </div>
          </form>
        </div>
        <div v-if="users.loading === error" class="error-card">
          <h3>Sorry, an error occurred! Try again</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store';
import userResource from '../../../resources/user';
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
      const { actionCreators: { create } } = userResource;
      store.dispatch(create(this.formValues)).then(() => {
        this.$router.push({ name: 'users' });
      });
    }
  },
};
</script>
