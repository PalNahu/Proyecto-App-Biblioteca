import { collection, deleteDoc, doc, getDocs, setDoc } from 'firebase/firestore/lite'

import { deleteReserveById, endLoadingReserves, setReserves, startLoadingReserves } from "./bibliotechSlice";
import { FirebaseDB } from '../../firebase/config';


export const createReserve = () => {
  return async (dispatch, getState) => {

    const { isSaving } = getState().bibliotech;

    if (!isSaving) {
      const { uid } = getState().auth;
      const { bookById } = getState().books;

      dispatch(startLoadingReserves());
      const newDoc = doc(collection(FirebaseDB, `${uid}/bibliotech/reserves`));
      const setDocResp = await setDoc(newDoc, {
        idBook: bookById.id,
        volumeInfo: bookById.volumeInfo,
        dateReservation: new Date().toLocaleString(),
      });
      dispatch(endLoadingReserves());
    }

  }
}

export const getListReserves = (uid) => {

  return async (dispatch, getState) => {

    const collectionRef = collection(FirebaseDB, `${uid}/bibliotech/reserves`);
    const docs = await getDocs(collectionRef);

    const reserves = [];
    docs.forEach(doc => {
      reserves.push({idFirebase: doc.id, ...doc.data()});
    });

    dispatch(setReserves({list: reserves}));

  }
}

export const deleteReserve = (id) => {

  return async (dispatch, getState) => {

    const { uid } = getState().auth;

    const docRef = doc(FirebaseDB, `${uid}/bibliotech/reserves/${id}`);
    await deleteDoc(docRef);

    dispatch(deleteReserveById(id));
  }
}