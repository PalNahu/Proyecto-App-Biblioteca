import { collection, doc, setDoc } from 'firebase/firestore/lite'

import { startLoadingReserves } from "./bibliotechSlice";
import { FirebaseDB } from '../../firebase/config';


export const createReserve = () => {
  return async (dispatch, getState) => {

    const {isSaving} = getState().bibliotech;

    if(!isSaving){
      const { uid } = getState().auth;
      const { bookById } = getState().books;
  
      dispatch(startLoadingReserves());
      const newDoc = doc(collection(FirebaseDB,`${uid}/bibliotech/reserves`));
      const setDocResp = await setDoc(newDoc, bookById);
      console.log('entra')
    }

  }
}

export const startLoading = () => {

  return async (dispatch, getState) => {

  }

}