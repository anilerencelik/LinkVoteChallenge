import React, { useState, useEffect } from 'react'
import "./index.css"
import Header from '../../Components/Header'
import SubmitLink from '../../Components/SubmitLink'
import OrderSelect from '../../Components/OrderSelect'
import CustomLinkList from '../../Components/CustomLinkList'
import { useUrlLayerValue } from '../../Context/UrlContext'
import Pagination from '@material-ui/lab/Pagination';
import Dialog from '../../Components/Dialog'

const HomePage = (props) => {
    const [{ urls }, dispatch] = useUrlLayerValue();
    const [pagination, setPagination] = useState(1);
    const [selectedUrls, setSelectedUrls] = useState(urls.slice(0, 5))
    const [sortType, setSortType] = useState(0)
    const [clickDelete, setClickDelete] = useState(false)
    const [clickDeleteData, setClickDeleteData] = useState({})
    const paginationListener = (event, number) => {
        setPagination(number)
    }

    const handleClickDelete = (url) => {
        setClickDelete(true)
        setClickDeleteData(url)
    }

    const handleClickDelteConfirm = () => {
        dispatch({
            type: "REMOVE_URL",
            payload: clickDeleteData.id
        })
        setClickDeleteData({})
        setClickDelete(false)

    }

    const handleClickDeleteReject = () => {
        setClickDeleteData({})
        setClickDelete(false)
    }

    useEffect(() => {
        setSelectedUrls(urls.slice((pagination - 1) * 5, (pagination * 5)))
    }// eslint-disable-next-line
        , [urls, pagination, sortType])
    return (
        <div style={{ position: "relative" }}>
            <div className="main-container">
                <Header />
                <div className="submit-list-container">
                    <SubmitLink />
                    <OrderSelect sortType={sortType} setSortType={setSortType} />
                    <CustomLinkList urls={selectedUrls} sortType={sortType} clickDelete={clickDelete} setClickDelte={setClickDelete} handleClickDelete={handleClickDelete} />
                    {urls.length > 5 ?
                        <Pagination
                            count={urls.length % 5 === 0 ? urls.length / 5 : Math.ceil(urls.length / 5)}
                            className="submit-list-container-pagination"
                            onChange={paginationListener}
                        /> : true
                    }
                </div>
            </div>
            {clickDelete && <Dialog accept={handleClickDelteConfirm} cancel={handleClickDeleteReject} />}
        </div>
    )
};

export default HomePage;
