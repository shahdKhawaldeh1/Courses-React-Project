import styles from './Card.module.scss';
import Rating from '../Rating/Rating';
import { Link } from 'react-router-dom';


export default function Card({course}){
    const imageUrl = `${process.env.PUBLIC_URL}/images/${course.image}`;
    return(
        <Link to={`/details/${encodeURIComponent(course.id)}`} className={styles["card-link"]}>
        <div className={styles.card}>
            <img src={imageUrl} alt={course.topic} className={styles["card-image"]}/>
            <div className={styles.info}>
                <p className={styles.category} title={course.category}>{course.category}</p>
                <h3 className={styles.title}title={course.topic}>{course.topic}</h3>
                <div className={styles.stars}>
                    <Rating rating={course.rating} />
                </div>
                <h6 className={styles["author-card"]}>Author: {course.name}</h6>
            </div>
        </div>
    </Link>
    );
}