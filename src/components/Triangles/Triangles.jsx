import styles from './Triangles.module.scss';
export default function (){
    return (
        <section className={styles['welcome-section']}>
            <div className={styles.triangles}>
                <div className={styles["green-triangle"]}></div>
                <div className={styles["blue-triangle"]}></div>
            </div>
            <div className={styles["center-welcome-section"]}>
                <div className={styles["welcome-text"]}>
                    <h3>Welcome to our website!</h3>
                    <h6>We have a new design that's fresh,modern,and easy to use.</h6>
                </div>
            </div>
        </section>
    );
}