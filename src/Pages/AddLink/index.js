import React, { useState } from 'react';
import "./index.css";
import Header from '../../Components/Header';
import { Link } from 'react-router-dom';
import { useUrlLayerValue } from '../../Context/UrlContext'

const AddLinkPage = (props) => {
    // eslint-disable-next-line
    const [{ }, dispatch] = useUrlLayerValue()
    const [url, setUrl] = useState("")
    const [sitename, setSitename] = useState("")
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        setShowSuccess(true)
        const newUrl = {
            id: Math.floor(Math.random() * 432843298),
            url,
            sitename,
            points: 0,
            modifiedAt: Date.parse(new Date())
        }
        dispatch({
            type: 'ADD_URL',
            payload: newUrl
        })
        setTimeout(() => {
            setShowSuccess(false)
        }, 2000);
        setUrl("")
        setSitename("")
    }

    return (
        <>
            <div className="add-link-main-container">
                <Header />
                <div className="add-link-content">
                    {showSuccess ?
                        <div className="succes-added-link--show" >
                            Link Added
                        </div> :
                        <div className="succes-added-link" >
                            Link Added
                        </div>
                    }
                    <div className="add-link-main-return-list">
                        <Link to="/" style={{ fontWeight: '500' }}>
                            <i className="fas fa-arrow-left" /> Return to List
                        </Link>
                        <h1 className="add-link-h1-text">
                            Add New Link
                        </h1>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="urlInput">Link Name:</label>
                                <input type="text" className="form-control" id="urlInput" aria-describedby="emailHelp" placeholder="MDN" value={sitename} onChange={(e) => setSitename(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="sitenameInput">Link URL:</label>
                                <input type="text" className="form-control" id="sitenameInput" placeholder="https://developer.mozilla.org/" value={url} onChange={(e) => setUrl(e.target.value)} />
                            </div>
                            <button type="submit" className="btn btn-dark add-link-button">ADD</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AddLinkPage;
