import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Shared/Header/Header';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Skill from './pages/Skill/Skill';
import Resume from './pages/Resume/Resume';
import Education from './pages/Education/Education';
// ..
AOS.init();

function App() {
  document.addEventListener('contextmenu', event => event.preventDefault());





  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/skill' element={<Skill />}></Route>
        <Route path='/resume' element={<Resume />}></Route>
        <Route path='/education' element={<Education />}></Route>
      </Routes>

    </div>
  );
}

export default App;
