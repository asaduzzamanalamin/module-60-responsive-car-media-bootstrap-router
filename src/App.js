
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';

function App() {
  return (
    <div>
      <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       {/* dynamic route use params*/}
       <Route path ='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
       {/* dynamic route */}

       <Route path='/about' element={<About></About>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
