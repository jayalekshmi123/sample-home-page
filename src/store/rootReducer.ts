import { combineReducers } from '@reduxjs/toolkit';

import { DefaultStore } from '../core/interfaces/store';
import userReducer from '../slices/userSlice';
import toasterReducer from '../slices/toasterSlice';

const reducerList: DefaultStore = {
    user: userReducer,
    toaster: toasterReducer,
};

const rootReducer = combineReducers(reducerList);

export default rootReducer;
