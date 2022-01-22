import React from 'react';
import Card from '../components/Card';
import { AppContext } from '../context';
import styles from '../App.module.scss';
import EmptyPage from '../components/EmptyPage';

function Favorites({ onAddToFavorite }) {
    const { favorites } = React.useContext(AppContext);

    return (
        <div className={styles.content}>
            {favorites.length > 0 ? (
                <div>
                    <h1>Мои закладки</h1>
                    <div className={styles.sneakers}>
                        {favorites.map((item) => (
                            <Card
                                key={item.id}
                                type="favorites"
                                favorited={true}
                                onFavorite={(obj) => onAddToFavorite(obj)}
                                {...item}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <EmptyPage
                    image="img/svg/no-bookmarks.svg"
                    title="Закладок нет :("
                    description="Вы ничего не добавляли в закладки"
                />
            )}
        </div>
    );
}

export default Favorites;
