const Card = () => {
   return (
      <div className="card">
         <div className="favorite">
            <img src="/img/heart-unliked.svg" alt="unliked" />
         </div>
         <img 
            width={133} 
            heigh={112} 
            src="/img/sneakers/1.jpg" 
            alt="sneakers"
         />
         <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
         <div className="cardBottom">
            <div className="cardPrice">
               <span>Цена:</span>
               <b>12 999 руб.</b>
            </div>
            <button className="button">
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