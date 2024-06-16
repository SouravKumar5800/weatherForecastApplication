import React, { useEffect, useState } from 'react';
import { ToggleButton } from './toggleButton';

const Header = () => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDateTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <header className='header-style'>
            <h1>Weather Now</h1>
            <p>{dateTime.toLocaleString()}</p>
        </header>
    );
};



export default Header;
