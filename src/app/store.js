import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/movie/movieSlice';
import usernameReducer from '../features/user/userSlice';


export const store = configureStore({
  reducer: {
    movie:movieReducer,
    username:usernameReducer,

  },
});



// import userSlice from '../features/user/userSlice';
// import usernameReducer from '../features/username/userSlice';