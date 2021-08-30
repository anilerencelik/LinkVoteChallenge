import React from 'react';
import "./index.css"

const Header = (props) => {
    return (
        <div className="header-container">
            <h1 className="header-item">
                Digitastic<span className="bold">.Plus</span>
            </h1>
            <h1 className="header-item">
                <span className="bold">Link</span>Vote Challenge
            </h1>
        </div>
    )
}

export default Header;
