import styles from './Button.module.scss';

export default function Button ({icon:Icon,onClick,children}){
    return (
        <>            
            <button className={styles.button} onClick={onClick}>
                {Icon && <span className={styles['button-icon']}>{Icon}</span>}
                <span>{children}</span>
            </button>
        </>
  

    );
}