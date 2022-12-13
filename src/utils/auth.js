import Cookies from "js-cookie";
const accessToken = "crow_access_token";
const refreshTokenKey = "crow_refresh_token";
const objCookie = {
  expires: 7,
  domain: process.env.COOKIE_DOMAIN,
};

export const saveToken = (access_token, refresh_token) => {
  if (access_token && refresh_token) {
    Cookies.set(accessToken, access_token, { ...objCookie });
    Cookies.set(refreshTokenKey, refresh_token, { ...objCookie });
  } else {
    Cookies.remove(accessToken, {
      ...objCookie,
      path: "/",
      domain: process.env.COOKIE_DOMAIN,
    });
    Cookies.remove(refreshTokenKey, {
      ...objCookie,
      path: "/",
      domain: process.env.COOKIE_DOMAIN,
    });
  }
};
export const getToken = () => {
  const access_token = Cookies.get(accessToken);
  const refresh_token = Cookies.get(refreshTokenKey);
  return {
    access_token,
    refresh_token,
  };
};
export const logOut = () => {
  const access_token = Cookies.get(accessToken);
  if (access_token) {
    Cookies.remove(accessToken, {
      ...objCookie,
      path: "/",
      domain: process.env.COOKIE_DOMAIN,
    });
    Cookies.remove(refreshTokenKey, {
      ...objCookie,
      path: "/",
      domain: process.env.COOKIE_DOMAIN,
    });
  }
};
