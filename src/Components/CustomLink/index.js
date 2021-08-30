import React from 'react';
import "./index.css";
import { useUrlLayerValue } from '../../Context/UrlContext';


const CustomLink = ({ url, clickDelete, setClickDelete, handleClickDelete }) => {
    // eslint-disable-next-line
    const [{ }, dispatch] = useUrlLayerValue();


    const handleClick = (url, type) => {
        const modified = {
            id: url.id,
            points: type === "INCREASE_VOTE" ? url.points += 1 : url.points -= 1,
            modifiedAt: Date.parse(new Date())
        }
        dispatch({
            type: "UPDATE_URL",
            payload: modified
        })
        dispatch({
            type: 'SORT_URL'
        })
    }

    return (<>
        <div className="customlink-container">
            <span className="customlink-remover" onClick={() => handleClickDelete(url)}>
                <i className="fas fa-trash" />
            </span>
            <span className="customlink-point-box">
                <span className="customlink-point-box-point">
                    {url.points}
                </span>
                <span className="customlink-point-box-text">
                    POINTS
                </span>
            </span>
            <div className="customlink-right-container">
                <div className="customlink-right-sitename">
                    {url.sitename}
                </div>
                <div className="customlink-right-url">
                    {url.url}
                </div>
                <div className="customlink-right-vote-container">
                    <div className="customlink-right-vote" onClick={() => handleClick(url, "INCREASE_VOTE")}><i className="fas fa-arrow-up customlink-right-vote-icon" />Up Vote</div>
                    <div className="customlink-right-vote" onClick={() => handleClick(url, "DECREASE_VOTE")}><i className="fas fa-arrow-down customlink-right-vote-icon" />Down Vote</div>
                </div>
            </div>
        </div>
    </>)
};

export default CustomLink;
