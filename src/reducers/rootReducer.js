import { combineReducers } from "redux";
import {firestoreReducer} from 'redux-firestore'
import { firebaseReducer } from "react-redux-firebase";
import { userReducer } from "./userReducer";

const rootReducer= combineReducers({
firestore:firestoreReducer,
firebase:firebaseReducer,
userReducer: userReducer
});
export default rootReducer