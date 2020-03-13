import { useState } from 'react';

export const useLocalStorage = (key, initialState) => {

    //console.log(key);
    // console.log(initialState);
    
    const [storedValue, setStoredValue] = useState(() => {
        if (JSON.parse(window.localStorage.getItem(key))) {
            return JSON.parse(window.localStorage.getItem(key));
          } else {
            window.localStorage.setItem(key, JSON.stringify(initialState));
            return initialState;
          }
    });

    const setStatus = status => {
        console.log(status);
        setStoredValue(status);
        window.localStorage.setItem(key, JSON.stringify(status));
    };
    
    return [storedValue, setStatus];

}