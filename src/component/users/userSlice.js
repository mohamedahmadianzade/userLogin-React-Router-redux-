import { createSlice } from '@reduxjs/toolkit';
const userImage = "https://lh3.googleusercontent.com/ogw/AOh-ky1UFfrEQvUD8SpDkU62gBVyDSVoAaDEwQH2i2KbGA=s32-c-mo"
const UserSlice = createSlice({
    name: "user",
    initialState: {
        isAuth: false,
        accessToken: "",
        userInfo: {
            name: "",
            image: ""
        }
    },
    reducers: {
        login: (state, action) => {
            state.isAuth = true;
            state.userInfo.name = action.payload.name
            state.userInfo.image = userImage
        },
        logout: (state) => {
            state.isAuth = false;
            state.userInfo = {
            }
        }
    }
})
export default UserSlice