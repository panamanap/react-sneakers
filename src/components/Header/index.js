import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import styles from './Header.module.scss';

function Header({ onCart }) {
    const { totalPrice } = useCart();

    return (
        <header>
            <Link to="/react-sneakers/catalog">
                <div className={styles.headerLeft}>
                    <img
                        width={40}
                        heigh={40}
                        src="img/svg/logo.svg"
                        alt="logo"
                    />
                    <div>
                        <h3> React Sneakers</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>
            <ul>
                <li className={styles.cart} onClick={onCart}>
                    <img src="img/svg/cart.svg" alt="cart" />
                    <span>{totalPrice} руб.</span>
                </li>
                <li className={styles.cart}>
                    <Link to="/react-sneakers/favorites">
                        <img src="img/svg/bookmarks.svg" alt="bookmarks" />
                    </Link>
                </li>
                <li>
                    <Link to="/react-sneakers/orders">
                        <img
                            width={18}
                            heigh={18}
                            src="img/svg/user.svg"
                            alt="user"
                        />
                    </Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;
