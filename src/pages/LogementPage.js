import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Logement from "../models/logements.json";


const LogementPage = () => {

    const logement = useParams();
    const logementId = logement.id;
    const selectedLogement = Logement.find((e) => e.id === logementId );
    
    
    return (
        <div>
            <Header />
            <img src={selectedLogement.cover} alt="" className='gallery__card__img' />

        </div>
    );
};

export default LogementPage;