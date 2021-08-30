import React from 'react';
import "./index.css";
import { Link } from 'react-router-dom';

const SubmitLink = (props) => {
    return (
        <>
            <Link to="/add" className="submitlink-container">
                <div className="submitlin-item-add"><span className="item-frame">+</span></div>
                <div className="submitlin-item-text"><span>SUBMIT A LINK</span></div>
            </Link>
            <hr className="submitlink-hr" />
        </>
    )
};

export default SubmitLink;
