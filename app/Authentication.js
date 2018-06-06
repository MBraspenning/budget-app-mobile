import { AsyncStorage } from 'react-native';

export const USER_KEY = 'auth-test-key';

export const login = (claims) => {
    console.log(claims);
    
    return AsyncStorage.setItem(USER_KEY, 'true');
}

export const logout = () => {
    console.log('logout');
    
    return AsyncStorage.removeItem(USER_KEY);
}

export const isLoggedIn = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(USER_KEY)
        .then(res => {
            if (res !== null) {
                resolve(true);
            } else {
                resolve(false);
            }
        })
        .catch(err => reject(err));
    });    
};
