import React from 'react';
import Card from '../components/Card';
import { AppContext } from '../context';
import styles from '../App.module.scss';

function Favorites() {
    const { favorites, onAddToFavorite } = React.useContext(AppContext);
    return (
        <div className={styles.content}>
            <h1>Мои закладки</h1>
            <div className={styles.sneakers}>
                {favorites.map((item, index) => (
                    <Card
                        key={index}
                        favorited
                        onFavorite={onAddToFavorite}
                        {...item}
                    />
                ))}
            </div>
        </div>
    );
}

export default Favorites;
