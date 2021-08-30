import React from 'react'
import "./index.css"
import { useUrlLayerValue } from '../../Context/UrlContext'

const OrderSelect = ({ sortType, setSortType }) => {
    // eslint-disable-next-line
    const [{ }, dispatch] = useUrlLayerValue()

    const changeOrder = (value) => {
        setSortType(value)
        dispatch({
            type: 'SORT_URL',
            payload: value === '0' ? true : false
        })
    }

    //value={sortType} onChange={(e) => setSortType(e.target.value)}
    return (
        <>
            <div className="orderselect-container">
                <select className="orderselect-select" value={sortType} onChange={(e) => changeOrder(e.target.value)} >
                    <option value={0} >
                        Most Voted (MAX -{">"} MIN)
                    </option>
                    <option value={1}  >
                        Less Voted (MIN -{">"} MAX)
                    </option>dos
                </select>
            </div >
        </>
    )
};

export default OrderSelect;
