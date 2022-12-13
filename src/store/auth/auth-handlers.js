import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import { logOut, saveToken } from "utils/auth";
import {
  requestAuthFetchUser,
  requestAuthLogin,
  requestAuthRegiter,
  requestRefreshToken,
} from "./auth-requests";
import { authUpdateUser } from "./auth-slice";

export default function* handleAuthRegister(aciton) {
  const { payload } = aciton;

  try {
    const response = yield call(requestAuthRegiter, payload);
    if (response.status === 201) {
      toast.success("Create account successfully ");
    }
  } catch (error) {
    console.log(error);
  }
}

function* handleAuthLogin(aciton) {
  try {
    const response = yield call(requestAuthLogin, aciton.payload);
    if (response.data.accessToken && response.data.refreshToken) {
      saveToken(response.data.accessToken, response.data.refreshToken);
      yield call(handleAuthFetchMe, { payload: response.data.accessToken });
    }
    toast.success("Login successfully");
  } catch (error) {
    const response = error.response.data;
    if (response.statusCode === 403) {
      toast.error(response.error.message);
      return;
    }
  }
}
function* handleAuthFetchMe(aciton) {
  try {
    const response = yield call(requestAuthFetchUser, aciton.payload);
    if (response.status === 200) {
      yield put(
        authUpdateUser({
          user: response.data,
          accessToken: aciton.payload,
        })
      );
    }
  } catch (error) {
    console.log(error);
  }
}
function* handleRefreshToken({ payload }) {
  try {
    const response = yield call(requestRefreshToken, payload);
    if (response.data) {
      saveToken(response.data.accessToken, response.data.refreshToken);
      yield handleAuthFetchMe({
        payload: response.data.accessToken,
      });
    }
  } catch (error) {}
}
function* handleAuthLogout() {
  yield put(
    authUpdateUser({
      user: undefined,
      accessToken: null,
    })
  );
  logOut();
}
export { handleAuthLogin, handleRefreshToken, handleAuthLogout };
