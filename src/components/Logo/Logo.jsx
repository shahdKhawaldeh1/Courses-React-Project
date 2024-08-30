import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';
export default function Header (){
    return (
       <Link to="/" className={styles.logo}>
        <h4>Web Topics</h4>
      </Link>
    );
}