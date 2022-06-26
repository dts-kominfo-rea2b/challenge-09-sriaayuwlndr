// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';

const Header = () => {
    return (
        <div style={{background: "red", width: "100%", padding: "20px", height: "auto"}}>
            <h1>CALL A FRIEND</h1>
            <h4>Your Friendly Contact App</h4>
        </div>
    )
}

export default Header;