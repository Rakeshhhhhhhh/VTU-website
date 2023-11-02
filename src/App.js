import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './components/HomeScreen';
import {Outlet} from 'react-router-dom';
import About from './components/About';

function App() {
  return (
    <>
    <Header/>
    <main>

      <Outlet/>
      
    </main>
    <Footer/>
    
    </>
  );
};

export default App;
