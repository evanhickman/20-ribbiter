<template lang="html">
  <div class="">
    <div class="section index-main">
    <div class="container">
        <h1 class="heading">Welcome To Ribbiter!</h1>
      <div class="button-links">
        <button class="button-link"><router-link :to="{ name: 'register' }">Register</router-link></button>
        <button class="button-link"><a href="#">Login</a></button>
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
