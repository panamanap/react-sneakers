import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

const arr = [
   {
      name: 'Мужские Кроссовки Nike Blazer Mid Suede',
      price: 12999,
      imageUrl: '/img/sneakers/1.jpg',
   },

   {
      name:  'Мужские Кроссовки Nike Air Max 270',
      price: 12999,
      imageUrl: '/img/sneakers/2.jpg',
   },

   {
      name:  'Мужские Кроссовки Nike Blazer Mid Suede',
      price: 8499,
      imageUrl: '/img/sneakers/3.jpg',
   },

   {
      name:  'Кроссовки Puma X Aka Boku Future Rider',
      price: 8999,
      imageUrl: '/img/sneakers/4.jpg',
   }
]

const App = () => {
   return (
      <div className="wrapper">
         <Drawer/>
         <Header/>
         <div className="content">
            <div className="wrapperSneakers">
               <h1>Все кроссовки</h1>
               <div className="searchBlock">
                  <img src="/img/search.svg" alt="search"/>
                  <input type="text" placeholder="Поиск..." />
               </div>
            </div>
            <div className="sneakers">
               {arr.map(item => <Card 
                  title={item.name}
                  price={item.price}
                  imageUrl={item.imageUrl}
               /> )}
            </div>
         </div>
      </div>
   );
}

export default App;
