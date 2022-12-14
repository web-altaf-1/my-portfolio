import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Shared/Header/Header';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css'
import Loading from './components/Shared/Loading/Loading';
import Skill from './pages/Skill/Skill';
import Resume from './pages/Resume/Resume';
import Education from './pages/Education/Education';
import Projects from './pages/Projects/Projects';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';
import Contact from './pages/Contact/Contact';
import NotFound from './components/Shared/NotFound/NotFound';
// ..
AOS.init();

function App() {
  // right click option off
  document.addEventListener('contextmenu', event => event.preventDefault());

  // website preloader code 
  window.addEventListener('load',function(){
    return <Loading></Loading>
  })

  

  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/skill' element={<Skill />}></Route>
        <Route path='/resume' element={<Resume />}></Route>
        <Route path='/education' element={<Education />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/projects/:id' element={<ProjectDetail />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>

    </div>
  );
}

export default App;
