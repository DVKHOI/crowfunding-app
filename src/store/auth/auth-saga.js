import { takeLatest } from "redux-saga/effects";
import handleAuthRegister, {
  handleAuthLogin,
  handleAuthLogout,
  handleRefreshToken,
} from "./auth-handlers";
import {
  authLogin,
  authLogout,
  authRefreshToken,
  authRegister,
} from "./auth-slice";
export default function* authSaga() {
  yield takeLatest(authRegister.type, handleAuthRegister);
  yield takeLatest(authLogin.type, handleAuthLogin);
  yield takeLatest(authRefreshToken.type, handleRefreshToken);
  yield takeLatest(authLogout.type, handleAuthLogout);
}
