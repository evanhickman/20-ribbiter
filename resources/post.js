import createResource from 'redux-thunk-rest';

const postResource = createResource('user', {
  url: 'http://ribbiterapi.herokuapp.com/posts'
});

export default postResource;
