<template lang="html">
  <div class="">

  </div>
</template>

<script>
import store from '../store.js';
import postResource from '../../../resources/post';
export default {
  name: 'ribbits',
  data() {
    return {
      posts: this.$select('posts'),
    };
  },

  created() {
    const { actionCreators: { findAll } } = postResource;
    store.dispatch(findAll());
  },

  methods: {

  },
};
</script>
