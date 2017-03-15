<template lang="html">
  <div class="app">
  <div class="section header">
      <nav class="top-nav">
        <span class="top-nav__left">
          <router-link :to="{ name: 'index' }">Ribbiter</router-link>
        </span>
        <span class="top-nav__right">
          <a href="#">Ribbits</a>
          <a href="#">Frogs</a>
          <a href="#">Login</a>
        </span>
      </nav>
  </div>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Application',
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
