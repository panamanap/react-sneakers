import React from 'react';
import { AppContext } from '../../context';
import styles from './Info.module.scss';
import arrow from '../../svg/arrow.svg';

function Info({ title, discriotion, image }) {
    const { setOpened } = React.useContext(AppContext);

    return (
        <div className={styles.cartEmpty}>
            <img
                className={styles.imgEmpy}
                width={120}
                src={image}
                alt="cart"
            />
            <h2>{title}</h2>
            <p className={styles.textEmpty}>{discriotion}</p>
            <button
                className={styles.greenButton}
                onClick={() => setOpened(false)}
            >
                <img src={arrow} alt="arrow" />
                Вернуться назад
            </button>
        </div>
    );
}

export default Info;
