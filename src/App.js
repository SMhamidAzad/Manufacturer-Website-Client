import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Pages/Blogs/Blogs';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import Portfolio from './components/Pages/Portfolio/Portfolio';
import Footer from './components/Shared/Footer';
import Header from './components/Shared/Header';
import NotFound from './components/Shared/NotFound';

function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
       <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
