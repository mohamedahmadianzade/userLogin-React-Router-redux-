import { createSlice } from '@reduxjs/toolkit';
const UserSlice = createSlice({
    name: "user",
    initialState: {
        isAuth: false,
        accessToken: "123",
        userInfo: {
            name: "",
            image: "https://lh3.googleusercontent.com/ogw/AOh-ky1UFfrEQvUD8SpDkU62gBVyDSVoAaDEwQH2i2KbGA=s32-c-mo"
        }
    },
    reducers: {
        login: (state, action) => {
            state.isAuth = true;
            state.userInfo.name = action.payload.name
        },
        logout: (state) => {
            state.isAuth = false;
            state.userInfo = {
                image: "https://lh3.googleusercontent.com/ogw/AOh-ky1UFfrEQvUD8SpDkU62gBVyDSVoAaDEwQH2i2KbGA=s32-c-mo"
            }
        }
    }
})
export default UserSlice