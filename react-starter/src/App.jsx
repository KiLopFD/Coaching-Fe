import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header/>
      <Home />
      <Footer/>
    </>
  );
}

export default App;