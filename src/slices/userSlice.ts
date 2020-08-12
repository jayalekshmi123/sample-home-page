import { createSlice } from '@reduxjs/toolkit';

import { UserAuth } from '../core/interfaces/user';
import { getAccessToken, getUserName, setUserSession, removeUserSession } from '../core/utils/sessionHandler';
import fetch, { postRequestHandler } from '../core/api';
import request from '../core/api/requestHandler';
import { showToaster } from './toasterSlice';

const accessToken = getAccessToken();
const initialState: UserAuth = {
    name: getUserName() || '',
    accessToken: accessToken || '',
    isSignedIn: Boolean(accessToken),
    loading: false,
};

const session = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getSessionStart(state) {
            state.loading = true;
        },
        getLoginSuccess(state, action) {
            const { name, token } = action.payload;
            state.name = name;
            state.accessToken = token;
            state.isSignedIn = true;
            setUserSession({ name, accessToken: token });
        },
        getLogoutSuccess(state) {
            state.name = '';
            state.accessToken = '';
            state.isSignedIn = false;
            removeUserSession();
        },
    },
});

export const { getSessionStart, getLoginSuccess, getLogoutSuccess } = session.actions;
export default session.reducer;

export const signIn = ({ username, password }) => async (dispatch) => {
    try {
        dispatch(getSessionStart());

        //****** Uncomment if fetch used ****/
        // const options = postRequestHandler({ username, password });
        // //Replace with API
        // const response = await fetch('/login/', options);

        // *************************

        // ********** Uncomment if axios is used ******************
        const response = await request('/login/', 'POST', { data: { username, password }, params: {} });
        // ************************************

        dispatch(getLoginSuccess({ ...response }));
    } catch (error) {
        dispatch(
            showToaster({
                message: 'Unable to sign in. Please try again.',
            }),
        );
    }
};

export const logout = () => async (dispatch, getState) => {
    dispatch(getLogoutSuccess());
    dispatch(showToaster({ message: 'Sign out successful' }));

    try {
        const token = getState().session.token;

        //****** Uncomment if fetch used ****/
        // await fetch('/logout/', {
        //     headers: { Authorization: `Token ${token}` },
        // });
        //**************** */

        // ********** Uncomment if axios is used ******************
        await request('/logout/', 'GET', { data: {}, params: {} });
        // ***************
    } catch (error) {}
};
