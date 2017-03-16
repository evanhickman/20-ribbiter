import { combineReducers } from 'redux';
import userResource from '../../resources/user.js';
import postResource from '../../resources/post.js';

export default combineReducers({
  users: userResource.reducer,
  posts: postResource.reducer,
});
