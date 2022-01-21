import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import styles from './Header.module.scss';
import logo from '../../svg/logo.svg';
import cart from '../../svg/cart.svg';
import bookmarks from '../../svg/bookmarks.svg';
import user from '../../svg/user.svg';

function Header({ onCart }) {
    const { totalPrice } = useCart();

    return (
        <header>
            <Link to="/react-sneakers">
                <div className={styles.headerLeft}>
                    <img width={40} heigh={40} src={logo} alt="logo" />
                    <div>
                        <h3> React Sneakers</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>
            <ul>
                <li className={styles.cart} onClick={onCart}>
                    <img src={cart} alt="cart" />
                    <span>{totalPrice} руб.</span>
                </li>
                <li className={styles.cart}>
                    <Link to="/react-sneakers/favorites">
                        <img src={bookmarks} alt="bookmarks" />
                    </Link>
                </li>
                <li>
                    <Link to="/react-sneakers/orders">
                        <img width={18} heigh={18} src={user} alt="user" />
                    </Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;
