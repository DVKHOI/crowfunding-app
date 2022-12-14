const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: undefined,
    accessToken: null,
  },
  reducers: {
    authLogin: (state, action) => ({
      ...state,
    }),
    authRegister: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    authUpdateUser: (state, action) => ({
      user: action.payload.user,
      accessToken: action.payload.accessToken,
    }),
    authFetchUser: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    authRefreshToken: (state, action) => ({}),
    authLogout: (state, action) => ({}),
  },
});
export const {
  authLogin,
  authRegister,
  authUpdateUser,
  authFetchUser,
  authRefreshToken,
  authLogout,
} = authSlice.actions;
export default authSlice.reducer;
