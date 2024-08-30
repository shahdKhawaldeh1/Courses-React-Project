import Logo from '../Logo/Logo.jsx';
import Button from '../Button/Button.jsx';
import styles from  './Header.module.scss';
import { IoSunnyOutline,IoHeartOutline,IoMoonOutline } from "react-icons/io5";
import { useState,useContext  } from 'react';
import { FavoritesContext } from '../../context/FavoritesContext';
import { ThemeContext } from '../../context/ThemeContext';
import Favourites from '../Favourites/Favourites';
import { useFavoritesVisibility } from '../../context/FavoritesVisibilityContext';

export default function Header (){
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { toggleFavorites } = useFavoritesVisibility();

    return (
        <>
        <div className={`${styles.header} ${styles['body-container']}`}>
            <Logo/>
            <div className={`${styles.buttons}`}>
                <Button icon={theme === 'dark' ? <IoSunnyOutline /> : <IoMoonOutline /> } onClick={toggleTheme} className={`${styles.modeButton}`}>
                    {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </Button>
                <Button icon={theme === 'dark' ? <IoHeartOutline /> : <IoHeartOutline />}  onClick={toggleFavorites} className={`${styles.favButton}`}>Favourites </Button>
            </div>
        </div>
        
        </>

    );
}