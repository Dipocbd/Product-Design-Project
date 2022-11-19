import './App.css'
import Nav from './components/nav/Nav';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Services from './components/services/Services';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <Nav />
    <Intro />
    <About />
    <Services/>
    <Footer/>
    </>
  );
}

export default App;
