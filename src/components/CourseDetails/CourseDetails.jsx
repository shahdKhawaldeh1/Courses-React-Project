import styles from  './CourseDetails.module.scss';
import Rating from '../Rating/Rating';
export default function CourseDetails({course}){
    return(
        <div className={styles.details}>
            <h5 className={styles["detail-category"]}>{course.category}</h5>
            <h2 className={styles["detail-title"]} >{course.topic}</h2>
            <div className={styles["detail-rating"]}><Rating rating={course.rating} /></div>
            <p className={styles["detail-description"]}>{course.description}</p>
    </div>
    );

}