<template lang="html">
  <div class="">
    <div class="section bg">
    <div class="index-main">
      <div class="container">
          <h1 class="heading">Welcome To Ribbiter!</h1>
        <div class="button-links">
          <button class="button-link"><router-link :to="{ name: 'register' }">Register</router-link></button>
          <button class="button-link"><router-link :to="{ name: 'login' }">Login</router-link></button>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
