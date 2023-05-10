import React from 'react';

const Logo = () => {
    return (
        <div className="logo">
            {/* Les images importées depuis la balise IMG sont accessibles dans 'public' */}
            <img src="./logo.png" alt=" Earth logo " />
            <h3>Our World</h3>
        </div>
    );
};

export default Logo;
