import React from 'react';
import styles from './EmptyPage.module.scss';

const EmptyPage = ({ image, title, description }) => {
    return (
        <div className={styles.emptyPage}>
            <img src={image} alt="smiley" />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default EmptyPage;
