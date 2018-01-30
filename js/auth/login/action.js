import axios from 'axios'

const LOGIN_URL = 'http://localhost:12345/api/v1/auth'

export const START_LOGIN = 'START_LOGIN'
export const startLogin = (username) => ({
    type: START_LOGIN,
    username
})

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const loginWithSuccess = (username, json) => ({
    type: LOGIN_SUCCESS,
    token: json.access_token,
    username
})

export const LOGIN_FAILED = 'LOGIN_FAILED'
export const loginWithFail = (username, error) => ({
    type: LOGIN_FAILED,
    username,
    error
})

export const doLogin = (username, password) => (dispatch, getState) => {
    dispatch(startLogin(username))
    return axios.post(LOGIN_URL, { username, password })
        .then(response => response.json())
        .then(json => dispatch(loginWithSuccess(username, json)))
        .catch(error => dispatch(loginWithFail(username, error)))
}