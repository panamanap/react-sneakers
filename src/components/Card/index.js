import styles from './Card.module.scss';

const Card = ({title, price, imageUrl }) => {

   const onBtnClick = () => {
      console.log('ffff');
   } 

   return (
      <div className={styles.card}>
         <div className={styles.favorite}>
            <img src="/img/heart-unliked.svg" alt="unliked" />
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
            <button className={styles.button} onClick={onBtnClick}>
               <img 
                  width={11} 
                  heigh={11} 
                  src="/img/btn-plus.svg" 
                  alt="plus"
               />
            </button>
         </div>
      </div>   
   )
}

export default Card;