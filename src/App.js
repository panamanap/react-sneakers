import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

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
               <Card/>
            </div>
         </div>
      </div>
   );
}

export default App;
