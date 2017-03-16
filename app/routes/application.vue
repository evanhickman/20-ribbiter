<template lang="html">
  <div class="app">
  <div class="section header">
      <nav class="top-nav">
        <span class="top-nav__left">
          <router-link :to="{ name: 'index' }" class="top-nav__link">Ribbiter</router-link>
        </span>
        <span class="top-nav__right">
          <a href="#" class="top-nav__link">Ribbits</a>
          <router-link :to="{ name: 'users' }" class="top-nav__link">Frogs</router-link>
          <router-link :to="{ name: 'login' }" class="top-nav__link">Login</router-link>
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
