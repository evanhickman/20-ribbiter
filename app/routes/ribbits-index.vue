<template lang="html">
  <div class="">
    <div class="section hs-bg">
      <div class="container">
        <div class="grid-vertical">
          <div class="grid-vertical__item full-width-heading">
            <h1>Recent Ribbits</h1>
          </div>
          <div class="grid-vertical__item grid">
            <div class="grid__item new-post">
              <div class="form-card">
                <h1 class="form-card__heading">New Ribbit</h1>
                <form @submit.prevent="submit" class="form-card__form">
                  <p class="form-card__title">What's Going On?</p>
                  <p>
                    <textarea rows="8" cols="40" class="new-post__field" v-model="formValues.body"></textarea>
                  </p>
                  <div class="form-card__buttons">
                    <a href="#"><button type="button" class="button is-info">Clear</button></a>
                    <button @click="clear" type="submit" class="button is-success">Save</button>
                  </div>
                </form>
              </div>
            </div>
            <div class="grid__item ribbit-list">
              <div class="form-card">
                <h1 class="form-card__heading">See What's Happening!</h1>
                <div class="form-card__block load-block">
                  <a href="#"><button type="button" class="button is-info load-button" @click="load">Load New Ribbits</button></a>
                </div>
                <div v-for="item in posts.items" class="form-card__block ribbit-block">
                  <a href="#" class="username">${{ item.user.username }}</a>
                  <p class="ribbit-block__content">{{item.body}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store.js';
import postResource from '../resources/post';
export default {
  name: 'ribbits',
  data() {
    return {
      formValues: {
        body: '',
      },
      posts: this.$select('posts'),
    };
  },

  created() {
    this.load();
  },

  methods: {
    load() {
      const { actionCreators: { findAll } } = postResource;
      store.dispatch(findAll());
    },

    clear() {
      this.formValues = { body: '' };
    },

    submit() {
      const { actionCreators: { create } } = postResource;
      store.dispatch(create(this.formValues)).then(() => {
        this.clear();
      });
    }
  },
};
</script>
