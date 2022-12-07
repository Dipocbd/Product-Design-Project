import './App.css'
import Nav from './components/nav/Nav';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Footer from './components/footer/Footer';
import Projects from './components/projects/Projects';


function App() {
  return (
    <>
    
    <Router>
    <Nav />
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/services' element={<Services/>}></Route>
    <Route path='/projects' element={<Projects/>}></Route>
    {/* <Route path='/contacts' component={Contacts} exact><Contacts/></Route>
    <Route path='/resume' component={Resume} exact><Resume/></Route> */}

</Routes>
</Router>
    <Footer/>
    </>
  );
}

export default App;
