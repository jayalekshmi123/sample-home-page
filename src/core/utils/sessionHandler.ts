import { UserAuth } from '../interfaces/user';
const SESSION_NAME = 'sample-grocery-app.session'; //Replace app with ProjectName

export const setUserSession = (data: UserAuth) => {
    localStorage.setItem(SESSION_NAME, JSON.stringify(data));
};

export const getUserSession = () => {
    const data = localStorage.getItem(SESSION_NAME) || '{}';
    return JSON.parse(data);
};

export const removeUserSession = () => {
    localStorage.removeItem(SESSION_NAME);
};

export const getAccessToken = () => getUserSession().accessToken;

export const getUserName = () => getUserSession().name;

export const isLoggedIn = () => localStorage.getItem(SESSION_NAME) !== null;
