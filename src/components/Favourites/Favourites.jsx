import React from 'react';
import FavCard from '../FavCard/FavCard';
import './Favourites.css';
import { useContext  } from 'react';
import { FavoritesContext } from '../../context/FavoritesContext';

const Favourites = () => {
    const { favorites } = useContext(FavoritesContext);
    if (favorites.length === 0) {
        return <div className="favorites-container">No favorites yet.</div>;
      }
    return (
            <div className="favourites-container">
                <div className="favourites-content">
                    <h2 className="fav-topics">My Favourite Topics</h2>
                    <ul className="favorite-list">
                        {favorites.map(favorite => (
                            <FavCard key={favorite.id} favourite={favorite} />
                        ))}
                    </ul>
                </div>
            </div>
            );
};

export default Favourites;
