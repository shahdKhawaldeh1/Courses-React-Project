import React from 'react';
import './FavCard.css';
import Rating from '../Rating/Rating';
import { Link } from 'react-router-dom';

const FavCard = ({ favourite }) => {
    const imageUrl = `${process.env.PUBLIC_URL}/images/${favourite.image}`;

    return (
        <Link to={`/details/${encodeURIComponent(favourite.id)}`} className="favorite-item card-link">
        <div class="favorite-card">
            <img src={imageUrl} alt={favourite.topic} className="favorite-image"/>
            <div className="info">
                <h3 className="favorite-title">{favourite.topic}</h3>
                <div className="favorite-rating ">
                    <Rating rating={favourite.rating} />
                </div>
            </div>
        </div>
        </Link>
 );
};
export default FavCard;
