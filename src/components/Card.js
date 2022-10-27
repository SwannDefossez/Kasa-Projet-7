import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ logement } ) => {
    
    
    return (
        
            <NavLink to={"./logement/" + logement.id} className="gallery__card">
                <article>
                <h3 className='gallery__card__h3'>{logement.title}</h3>
                <img className='gallery__card__img' src={logement.cover} alt={logement.title} />
                </article>
            </NavLink>
       
    );
};

export default Card;