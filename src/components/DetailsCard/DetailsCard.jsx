import './DetailsCard.css';
import {IoHeartOutline } from "react-icons/io5";
import { FavoritesContext } from '../../context/FavoritesContext';
import { useContext } from 'react';
export default function DetailsCard({course}){
    const imageUrl = `${process.env.PUBLIC_URL}/images/${course.image}`;
    const { addToFavorites, removeFromFavorites, isFavorite } = useContext(FavoritesContext);
    const handleFavoriteToggle = () => {
        if (isFavorite(course.id)) {
          removeFromFavorites(course.id);
        } else {
          addToFavorites(course);
        }
      };
    return(
        <div className="details-card">
            <img src={imageUrl} alt={course.topic} className="detail-img"/>
            <div className="under-image">
                <p className="detail-author">
                    <strong>{course.topic}</strong> by<a href="#" className="details__link">{course.name}</a>
                </p>
                <div className="add-to-fav">
                    <p className="interested-topic">Interested about this topic?</p>
                    <button className="add-to-favorites" id="addToFavorites" onClick={handleFavoriteToggle}><span>{isFavorite(course.id) ? "Remove from Favorites" : "Add to Favorites"}</span><IoHeartOutline className='heart-icon'/></button>
                    <p  className="unlimited-credites">Unlimited Credits</p>
                </div>
            </div>
        </div>
    );
}