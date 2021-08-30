import React from 'react';
import "./index.css";

const SubmitLink = ({ accept, cancel }) => {
    return (
        <div className="dialog-bg-container" >
            <div className="dialog-bg-inner-container" >
                <div className="dialog-container">
                    <div className="dialog-top-bar-container">
                        <div className="dialog-top-bar-item">Remove Link</div>
                        <div className="dialog-top-bar-item dialog-top-bar-item-close" onClick={cancel}>x</div>
                    </div>
                    <div className="dialog-main-container">
                        <h3 className="dialog-main-subtext">
                            Do you want to remove:
                        </h3>
                        <h2 className="dialog-main-maintext">
                            Product Hunt
                        </h2>
                        <div className="dialog-main-button-container">
                            <button className="dialog-main-button-item btn btn-dark" onClick={accept}>
                                OK
                            </button>
                            <button className="dialog-main-button-item btn btn-dark" onClick={cancel}>
                                CANCEL
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SubmitLink;
