import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import styles from "./Header.module.scss";

function Header({ onCart }) {
  const { totalPrice } = useCart();

  return (
    <header>
      <Link to="/">
        <div className={styles.headerLeft}>
          <img width={40} heigh={40} src="/img/logo.png" alt="logo" />
          <div>
            <h3> React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul>
        <li className={styles.cart} onClick={onCart}>
          <img src="/img/cart.svg" alt="cart" />
          <span>{totalPrice} руб.</span>
        </li>
        <li className={styles.cart}>
          <Link to="/favorites">
            <img src="/img/heart.svg" alt="bookmarks" />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img width={18} heigh={18} src="/img/user.svg" alt="user" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
