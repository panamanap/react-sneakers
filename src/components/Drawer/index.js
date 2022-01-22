import React from 'react';
import Info from '../Info';
import axios from 'axios';
import styles from './Drawer.module.scss';
import { CART_URL, ORDERS_URL } from '../../utils/const';
import { useCart } from '../../hooks/useCart';

// из-за mockapi надо делать задержку
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemoveItem, opened }) {
    const { cartItems, setCartItems, totalPrice } = useCart();
    const [orderId, setOrderId] = React.useState(null);
    const [orderCompleted, setOrderCompleted] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const onClickOrder = async () => {
        setIsLoading(true);
        try {
            const { data } = await axios.post(ORDERS_URL, {
                items: cartItems,
            });
            setOrderId(data.id);
            setOrderCompleted(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete(`${CART_URL}/${item.id}`);
                await delay(1000);
            }
        } catch (error) {
            alert('Не удалось создать заказ:(');
        }
    };

    const onCloseDrawer = (event) => {
        const str = event.target.className.split('_')[1];
        if (str === 'overlay') onClose(false);
    };

    return (
        <div
            className={`${styles.overlay} ${
                opened ? styles.overlayVisible : ''
            }`}
            onClick={onCloseDrawer}
        >
            <div className={`${styles.drawer}`}>
                <h2>
                    Корзина
                    <img
                        className={styles.removeBtn}
                        src="img/svg/btn-remove.svg"
                        alt="remove"
                        onClick={onClose}
                    />
                </h2>

                {cartItems.length > 0 ? (
                    <div className={styles.drawerWrapper}>
                        <div className={styles.items}>
                            {cartItems.map((item) => (
                                <div key={item.id} className={styles.cartItem}>
                                    <div
                                        style={{
                                            backgroundImage: `url(${item.imageUrl})`,
                                        }}
                                        className={styles.cartItemImg}
                                    ></div>
                                    <div className={styles.remove}>
                                        <p>{item.title}</p>
                                        <b>{item.price} руб.</b>
                                    </div>
                                    <img
                                        className={styles.removeBtn}
                                        src="img/svg/btn-remove.svg"
                                        alt="remove"
                                        onClick={() => onRemoveItem(item.id)}
                                    />
                                </div>
                            ))}
                        </div>

                        <div className={styles.cardTotalBlock}>
                            <ul>
                                <li>
                                    <span>Итого: </span>
                                    <div></div>
                                    <b>{totalPrice} руб.</b>
                                </li>
                                <li>
                                    <span>Налог 5%:</span>
                                    <div></div>
                                    <b>{(totalPrice * 5) / 100} руб.</b>
                                </li>
                            </ul>
                            <button
                                disabled={isLoading}
                                className={styles.greenButton}
                                onClick={() => onClickOrder()}
                            >
                                Оформить заказ
                                <img src="img/svg/arrow.svg" alt="arrow" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <Info
                        title={
                            orderCompleted
                                ? 'Заказ оформлен!'
                                : 'Корзина пустая'
                        }
                        discriotion={
                            orderCompleted
                                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                                : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
                        }
                        image={
                            orderCompleted
                                ? 'img/svg/completed-order.svg'
                                : 'img/svg/cart-empty.svg'
                        }
                    />
                )}
            </div>
        </div>
    );
}

export default Drawer;
