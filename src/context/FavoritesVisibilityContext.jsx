import React, { createContext, useState, useContext } from 'react';

const FavoritesVisibilityContext = createContext();

export const FavoritesVisibilityProvider = ({ children }) => {
  const [showFavorites, setShowFavorites] = useState(false);

  const toggleFavorites = () => {
    setShowFavorites(prev => !prev);
  };

  return (
    <FavoritesVisibilityContext.Provider value={{ showFavorites, toggleFavorites }}>
      {children}
    </FavoritesVisibilityContext.Provider>
  );
};

export const useFavoritesVisibility = () => useContext(FavoritesVisibilityContext);
