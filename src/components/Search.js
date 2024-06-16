import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [location, setLocation] = useState('');
    const [showErrorMsg, setShowErrMsg] = useState(false)

    const handleSearch = () => {
        if (location !== ""){
            onSearch(location);
            setLocation("");
        }
        else{
            setShowErrMsg(true)
        }
        
    };

    return (
        <section className='search-style'>
            <input
                type="text"
                value={location}
                onChange={(e) => {
                    setLocation(e.target.value);
                    setShowErrMsg(false);   
                }}
                placeholder="Enter city name or zip code"
                className='input-style'
            />
            <button onClick={handleSearch} className='button-style'>Search</button>
            {showErrorMsg && <p className="error-msg">Please enter valid location</p>}
            
        </section>
    );
};

export default Search;
