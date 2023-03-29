import React, { useContext, useState, useEffect } from 'react';
import DetailsCard from '../component/DetailsCard.jsx';
import { Context } from "../store/appContext.js"
import { useParams } from 'react-router-dom';

const Details = () => {
    const { store } = useContext(Context);
    
    const params = useParams();
    const { nature, id } = params

    const [detail, setDetail] = useState({});

    const getDetails = () => {
        let newDetail = store[nature].find((item) => {
            return (
                item.uid == id
            )
        })
        if (newDetail) {
            setDetail(newDetail)
        }
    }

    useEffect(() => {
        getDetails()
    }, [id])

    return (
        <>
            <div className='container'>
                <DetailsCard detail={detail} nature={nature} id={params.id} />
            </div>
        </>

    );
};

export default Details;