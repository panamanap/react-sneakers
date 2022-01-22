import React from 'react';
import axios from 'axios';
import Card from '../components/Card';
import { ORDERS_URL } from '../utils/const';
import { AppContext } from '../context';
import styles from '../App.module.scss';
import EmptyPage from '../components/EmptyPage';

function Orders() {
    const { onAddToFavorite, favorites } = React.useContext(AppContext);
    const [orders, setOrders] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    console.log(orders);

    React.useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(ORDERS_URL);
                setOrders(
                    data.reduce((prev, obj) => [...prev, ...obj.items], [])
                );

                setIsLoading(false);
            } catch (error) {
                alert('Ошибка при запросе заказа');
            }
        })();
    }, []);

    return (
        <div className={styles.content}>
            {orders.length > 0 ? (
                <div>
                    <h1>Мои заказы</h1>
                    <div className={styles.sneakers}>
                        {orders.map((item, index) => (
                            <Card
                                key={index}
                                {...item}
                                favorited={favorites.some(
                                    (obj) => +obj.parentId === +item.id
                                )}
                                onFavorite={(obj) => onAddToFavorite(obj)}
                                loading={isLoading}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <EmptyPage
                    image="img/svg/no-orders.svg"
                    title="У вас нет заказов"
                    description="Оформите хотя бы один заказ."
                />
            )}
        </div>
    );
}

export default Orders;
