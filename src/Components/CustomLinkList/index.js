import React from 'react';
import "./index.css"
import CustomLink from '../CustomLink'


const CustomLinkList = ({ urls, clickDelete, setClickDelete, handleClickDelete }) => {
    return (
        <>
            {urls && urls.map((url) => <CustomLink key={url.id} url={url} clickDelete={clickDelete} setClickDelte={setClickDelete} handleClickDelete={handleClickDelete} />)}
        </>
    )
}

export default CustomLinkList;
