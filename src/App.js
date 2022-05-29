import Search from './components/home/Search.js';
import AddProducts from './components/products/AddProducts';
import './App.css';
function App() {
  return (
    <div className='app'>
    <p className = 'heading-main'>Welcome To Marketplace</p>
    <Search/>
    <AddProducts/>
    </div>
  );
}

export default App;
