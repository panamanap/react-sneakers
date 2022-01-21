import React from 'react';
import Card from '../components/Card';
import { AppContext } from '../context';
import styles from '../App.module.scss';
import noBookmarks from '../svg/no-bookmarks.svg';
import EmptyPage from '../components/EmptyPage';

function Favorites() {
    const { favorites, onAddToFavorite } = React.useContext(AppContext);
    const [, setReload] = React.useState(false);

    return (
        <div className={styles.content}>
            {favorites.length > 0 ? (
                <div>
                    <h1>Мои закладки</h1>
                    <div className={styles.sneakers}>
                        {favorites.map((item, index) => (
                            <Card
                                key={index}
                                favorited
                                onFavorite={onAddToFavorite}
                                {...item}
                                setReload={setReload}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <EmptyPage
                    image={noBookmarks}
                    title="Закладок нет :("
                    description="Вы ничего не добавляли в закладки"
                />
            )}
        </div>
    );
}

export default Favorites;
