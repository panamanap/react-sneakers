import Card from '../components/Card';
import styles from "../App.module.scss";

function Home({
   searchValue,
   setSearchValue,
   onChangeSearchInput,
   items,
   onAddToFavorite,
   onAddToCart,
   isLoading,
}) {
   const renderItems = () => { 
      const filtredItems = items.filter(item => 
         item.title.toLowerCase().includes(searchValue.toLowerCase()))
      return (isLoading ? [...Array(10)] : filtredItems).map((item,index) =>  
         <Card 
            key={index}
            {...item}
            onFavorite={(obj)=> onAddToFavorite(obj)}
            onPlus={(obj) => onAddToCart(obj)}
            loading={isLoading}
         /> 
      )
   }
   return (
      <div className={styles.content}>
         <div className={styles.wrapperSneakers}>
            <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
            <div className={styles.searchBlock}>
               <img src="/img/search.svg" alt="search"/>
               {searchValue && <img 
                  className={styles.clearbtn}
                  src="/img/btn-remove.svg" 
                  alt="clear"
                  onClick={() => setSearchValue('')}
               />}
               <input 
                  type="text" 
                  placeholder="Поиск..."
                  value={searchValue}
                  onChange={onChangeSearchInput}
               />
            </div>
         </div>
         <div className={styles.sneakers}>
            {renderItems()}
         </div>
      </div>
   );
}

export default Home;