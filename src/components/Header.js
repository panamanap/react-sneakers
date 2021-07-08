const Header = () => {
   return (
      <header>
         <div className="headerLeft">
            <img 
               width={40} 
               heigh={40} 
               src="/img/logo.png" 
               alt="logo"
            />
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
               <img 
                  width={18} 
                  heigh={18} 
                  src='/img/user.svg'
               />
            </li>
         </ul>
         </header>
   );
}

export default Header;