import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './component/users/userSlice';
const store = configureStore({
    reducer: {
        user: UserSlice.reducer
    }
})
export default store
