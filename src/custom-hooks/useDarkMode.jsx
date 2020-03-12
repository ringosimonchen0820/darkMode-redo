import { useEffect } from 'react';

import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (initialstate) => {
    
    const [status, setStatus] = useLocalStorage('darkMode', initialstate);

    useEffect(()=> {
        if (status === true) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [status]);

    return [status, setStatus];

}