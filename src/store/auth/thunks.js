import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { checkingCredencials, login, logout } from "./authSlice"

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {

    dispatch(checkingCredencials());

  }
}

export const startGoogleSignIn = () => {
  return async (dispatch) => {

    dispatch(checkingCredencials());

    const result = await signInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));
    delete result.ok;
    dispatch(login(result));
  }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
  return async (dispatch) => {

    dispatch(checkingCredencials());

    const { ok, uid, photoUrl, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });

    if (!ok) return dispatch(logout({ errorMessage }));

    dispatch(login({ uid, displayName, email, photoUrl }));
  }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredencials());
    // 
    const { ok, uid, photoUrl, displayName, errorMessage } = await loginWithEmailPassword({ email, password });

    if (!ok) return dispatch(logout({ errorMessage }));

    dispatch(login({ uid, displayName, email, photoUrl }));

  }
}

export const startLogout = () => {
  return async (dispatch) => {

    await logoutFirebase();
    dispatch(logout());
  }
}