import createResource from 'redux-thunk-rest';

const postResource = createResource('user', {
  url: 'ttp://ribbiterapi.herokuapp.com/posts'
});

export default postResource;
