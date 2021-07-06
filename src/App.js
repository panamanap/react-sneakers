const App = () => {
   return (
      <div className="wrapper">
         <header>
         <div className="headerLeft">
            <img width={40} heigh={40} src="/img/logo.png" alt="logo"/>
            <div>
               <h3 > React Sneakers</h3>
               <p>Магазин лучших кроссовок</p>
            </div>
         </div>
         <ul className="headerRight">
            <li>
               <img src='/img/card.svg'/>
               <span>1205руб.</span>
            </li>
            <li>
               <img width={18} heigh={18} src='/img/user.svg'/>
            </li>
         </ul>
         </header>
         <div className="content">
            <h1>Все кроссовки</h1>
         <div className="sneakers">
         <div className="card">
               <img width={133} heigh={112} src="/img/sneakers/1.jpg" alt="sneakers"/>
               <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
               <div className="cardBottom">
                  <div className="cardPrice">
                     <span>Цена:</span>
                     <b>12 999 руб.</b>
                  </div>
                  <button className="button">
                     <img width={11} heigh={11  } src="/img/plus.svg" alt="plus"/>
                  </button>
               </div>
            </div>
            <div className="card">
               <img width={133} heigh={112} src="/img/sneakers/2.jpg" alt="sneakers"/>
               <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
               <div className="cardBottom">
                  <div className="cardPrice">
                     <span>Цена:</span>
                     <b>12 999 руб.</b>
                  </div>
                  <button className="button">
                     <img width={11} heigh={11  } src="/img/plus.svg" alt="plus"/>
                  </button>
               </div>
            </div>  
            <div className="card">
               <img width={133} heigh={112} src="/img/sneakers/3.jpg" alt="sneakers"/>
               <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
               <div className="cardBottom">
                  <div className="cardPrice">
                     <span>Цена:</span>
                     <b>12 999 руб.</b>
                  </div>
                  <button className="button">
                     <img width={11} heigh={11  } src="/img/plus.svg" alt="plus"/>
                  </button>
               </div>
            </div>  
            <div className="card">
               <img width={133} heigh={112} src="/img/sneakers/4.jpg" alt="sneakers"/>
               <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
               <div className="cardBottom">
                  <div className="cardPrice">
                     <span>Цена:</span>
                     <b>12 999 руб.</b>
                  </div>
                  <button className="button">
                     <img width={11} heigh={11  } src="/img/plus.svg" alt="plus"/>
                  </button>
                  </div>
               </div>    
            </div>
         </div>
      </div>
   );
};

export default App;
