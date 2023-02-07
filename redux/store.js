import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';

import { dashboardReducer } from './slices/dashboardSlices';
import { newReducer } from './slices/newsSlices';
import { loginReducer } from './slices/loginSlices';
import { ReduceChangePassword } from './slices/changePassword';
import { productReducer } from './slices/productSlice';
import { ReduceStaticPage } from './slices/staticPageSlices';
import { ReduceContact } from './slices/contactSlice';
import { blogReducer } from './slices/blogSlice';
import { userProductReducer } from './userSlices/productUserSlice';
import { tagReducer } from './slices/tagSlice';
import { voiceReducer } from './slices/clientVoice';
import { bannerReducer } from './slices/banerSlices';
import { userNewReducer } from './userSlices/newUserSlice';
import {userBlogReducer} from './userSlices/blogsSlices';
import { userContactReducer } from './userSlices/contactUserSlice';


export const rootReducer = combineReducers({
  //admin
  products: productReducer,
  dashboard: dashboardReducer,
  blogs: blogReducer,
  news: newReducer,
  tags: tagReducer,
  voice: voiceReducer,
  logins: loginReducer,
  changePassword: ReduceChangePassword,
  staticPage: ReduceStaticPage,
  contact: ReduceContact,
  banner: bannerReducer,

  //user
  userProduct: userProductReducer,
  userNew: userNewReducer,
  userBlog: userBlogReducer,
  userContact: userContactReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
