import Card from '../components/Card';
import styles from '../App.module.scss';

function Home({
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    items,
    onAddToFavorite,
    onAddToCart,
    favorites,
}) {
    const renderItems = () => {
        const filtredItems = items.filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
        );
        return filtredItems.map((item) => (
            <Card
                key={item.id}
                {...item}
                favorited={favorites.some((obj) => +obj.parentId === +item.id)}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
            />
        ));
    };
    return (
        <div className={styles.content}>
            <div className={styles.wrapperSneakers}>
                <h1>
                    {searchValue
                        ? `Поиск по запросу: "${searchValue}"`
                        : 'Все кроссовки'}
                </h1>
                <div className={styles.searchBlock}>
                    <img src="img/svg/search.svg" alt="search" />
                    {searchValue && (
                        <img
                            className={styles.clearbtn}
                            src="img/svg/btn-remove.svg"
                            alt="clear"
                            onClick={() => setSearchValue('')}
                        />
                    )}
                    <input
                        type="text"
                        placeholder="Поиск..."
                        value={searchValue}
                        onChange={onChangeSearchInput}
                    />
                </div>
            </div>
            <div className={styles.sneakers}>{renderItems()}</div>
        </div>
    );
}

export default Home;
