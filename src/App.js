import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Drawer from './components/Drawer';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { AppContext } from './context';
import { CART_URL, FAVORITES_URL, ITEMS_URL } from './utils/const';
import Orders from './pages/Orders';
import styles from './App.module.scss';

function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [favorites, setFavorites] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [opened, setOpened] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);
    const [orderId, setOrderId] = React.useState(null);

    React.useEffect(() => {
        (async () => {
            try {
                const [cartResponse, favoritesResponse, itemsResponse] =
                    await Promise.all([
                        axios.get(CART_URL),
                        axios.get(FAVORITES_URL),
                        axios.get(ITEMS_URL),
                    ]);

                setIsLoading(false);
                setCartItems(cartResponse.data);
                setFavorites(favoritesResponse.data);
                setItems(itemsResponse.data);
            } catch (error) {
                alert('Ошибка при запросе данных');
            }
        })();
    }, []);

    React.useEffect(() => {
        opened
            ? (document.body.style.overflow = 'hidden')
            : (document.body.style.overflow = 'auto');
    }, [opened]);

    const onAddToCart = async (obj) => {
        const fintItem = cartItems.find(
            (item) => Number(item.parentId) === Number(obj.id)
        );
        try {
            if (fintItem) {
                setCartItems((prev) =>
                    prev.filter(
                        (item) => Number(item.parentId) !== Number(obj.id)
                    )
                );
                await axios.delete(`${CART_URL}/${fintItem.id}`);
            } else {
                setCartItems((prev) => [...prev, obj]);
                const { data } = await axios.post(CART_URL, obj);
                setCartItems((prev) =>
                    prev.map((item) => {
                        if (item.parentId === data.parentId) {
                            return {
                                ...item,
                                id: data.id,
                            };
                        }
                        return item;
                    })
                );
            }
        } catch (error) {
            alert('Ошибка при добавлении в корзину');
        }
    };

    const onAddToFavorite = async (obj) => {
        try {
            if (favorites.find((item) => item.id === obj.id)) {
                axios.delete(`${FAVORITES_URL}/${obj.id}`);
            } else {
                const { data } = await axios.post(FAVORITES_URL, obj);
                setFavorites((prev) => [...prev, data]);
            }
        } catch (error) {
            alert('Не удалось добавить в закладки');
        }
    };

    const onRemoveItem = (id) => {
        try {
            axios.delete(`${CART_URL}/${id}`);
            setCartItems((prev) =>
                prev.filter((item) => Number(item.id) !== Number(id))
            );
        } catch (error) {
            alert('Ошибка при удалении из корзины');
        }
    };

    const onChangeSearchInput = (e) => {
        setSearchValue(e.target.value);
    };

    const addingItem = (id) => {
        return cartItems.some((obj) => Number(obj.parentId) === Number(id));
    };

    return (
        <AppContext.Provider
            value={{
                items,
                cartItems,
                favorites,
                addingItem,
                onAddToFavorite,
                onAddToCart,
                setOpened,
                setCartItems,
            }}
        >
            <div className={styles.appWrapper}>
                <div className={styles.wrapper}>
                    <Drawer
                        onClose={() => setOpened(false)}
                        onRemoveItem={onRemoveItem}
                        opened={opened}
                    />
                    <Header onCart={() => setOpened(true)} />
                    <Route path="/" exact>
                        <Home
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                            onChangeSearchInput={onChangeSearchInput}
                            items={items}
                            onAddToFavorite={onAddToFavorite}
                            onAddToCart={onAddToCart}
                            isLoading={isLoading}
                        />
                    </Route>
                    <Route path="/favorites" exact>
                        <Favorites onAddToFavorite={onAddToFavorite} />
                    </Route>
                    <Route path="/orders" exact>
                        <Orders />
                    </Route>
                </div>
            </div>
        </AppContext.Provider>
    );
}

export default App;
