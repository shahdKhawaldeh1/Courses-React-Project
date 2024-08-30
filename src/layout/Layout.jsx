import Footer from '../components/Footer/Footer.jsx';
import Header from '../components/Header/Header.jsx';
import Triangles from '../components/Triangles/Triangles.jsx';
import React from 'react';
import styles from './Layout.module.scss'

export default function({children}){
    return(
        
        <div className={styles["layout-container"]}>
            <Header />
            <Triangles/>
            <main className={styles["layout-main"]}>
                {children}
            </main>
            
            <Footer/>

        </div>
    );
}