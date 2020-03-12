import { useState, useEffect } from 'react';

export const useDarkMode = (value) => {
    const [status, setStatus] = useState(value);

    useEffect(()=> {
        if (status === true) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [status]);

    return [status, setStatus];
}