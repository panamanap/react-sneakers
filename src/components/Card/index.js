import React from 'react';
import ContentLoader from 'react-content-loader';
import { AppContext } from '../../context';
import styles from './Card.module.scss';
import liked from '../../svg/liked.svg';
import unliked from '../../svg/unliked.svg';
import btnChecked from '../../svg/btn-checked.svg';
import btnPlus from '../../svg/btn-plus.svg';

function Card({
    id,
    title,
    price,
    imageUrl,
    onPlus,
    onFavorite,
    favorited = false,
    loading = false,
    setReload,
}) {
    const { addingItem } = React.useContext(AppContext);
    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const obj = { id, parentId: id, title, imageUrl, price };

    const onClickPlus = () => {
        onPlus(obj);
    };

    const onClickFavorite = () => {
        onFavorite(obj);

        setIsFavorite(!isFavorite);
    };

    return (
        <div className={styles.card}>
            {loading ? (
                <ContentLoader
                    speed={2}
                    width={155}
                    height={250}
                    viewBox="0 0 155 265"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect
                        x="1"
                        y="0"
                        rx="10"
                        ry="10"
                        width="155"
                        height="155"
                    />
                    <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
                    <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
                    <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
                    <rect
                        x="124"
                        y="230"
                        rx="10"
                        ry="10"
                        width="32"
                        height="32"
                    />
                </ContentLoader>
            ) : (
                <>
                    <div className={styles.favorite} onClick={onClickFavorite}>
                        <img src={isFavorite ? liked : unliked} alt="unliked" />
                    </div>
                    <img
                        width={133}
                        heigh={112}
                        src={imageUrl}
                        alt="sneakers"
                    />
                    <h5>{title}</h5>
                    <div className={styles.cardBottom}>
                        <div className={styles.cardPrice}>
                            <span>Цена:</span>
                            <b>{price}</b>
                        </div>
                        {onPlus && (
                            <img
                                className={styles.plus}
                                src={addingItem(id) ? btnChecked : btnPlus}
                                alt="plus"
                                onClick={onClickPlus}
                            />
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

export default Card;
