<template lang="html">
  <div class="">
    <div class="section has-bg">
      <div class="container">
        <div class="grid-vertical">
          <div class="grid-vertical__item full-width-heading">
            <h1>Users</h1>
          </div>
          <div class="grid-vertical__item grid">
            <a v-for="user in users" class="grid__item user-item">
              <div class="user-item__left">
                <img src="http://placehold.it/100" alt="" class="grid__item-image">
              </div>
              <div class="user-item__right">
                <h2 class="grid__item-name">Tony Johnson</h2>
                <a href="#" class="grid__item-username">@bob</a>
              </div>
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store.js';
import userResource from '../../../resources/user';
export default {
  name: 'users',
  data() {
    return {
      users: this.$select('users'),
    };
  },

  created() {
    const {
      actionCreators: {
        findAll
      }
    } = userResource;
    store.dispatch(findAll());
  },

  methods: {

  },
};
</script>
