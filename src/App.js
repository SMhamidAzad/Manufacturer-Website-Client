import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Pages/Blogs/Blogs';
import AddReview from './components/Pages/Dashboard/AddReview';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import MakeAdmin from './components/Pages/Dashboard/MakeAdmin';
import MyOrder from './components/Pages/Dashboard/MyOrder';
import MyProfile from './components/Pages/Dashboard/MyProfile';
import Home from './components/Pages/Home/Home';
import Purchase from './components/Pages/Home/Purchase';
import Login from './components/Pages/Login/Login';
import RequireAuth from './components/Pages/Login/RequireAuth';
import Signup from './components/Pages/Login/Signup';
import Portfolio from './components/Pages/Portfolio/Portfolio';
import Footer from './components/Shared/Footer';
import Header from './components/Shared/Header';
import NotFound from './components/Shared/NotFound';
import 'react-toastify/dist/ReactToastify.css';
import AddProduct from './components/Pages/Dashboard/AddProduct';
import ManageProducts from './components/Pages/Dashboard/ManageProducts';
import ManageOrders from './components/Pages/Dashboard/ManageOrders';

function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/purchase/:id' element={
       <RequireAuth>
         <Purchase></Purchase>
       </RequireAuth>       
       }></Route>
       <Route path='/dashboard' element={
       <RequireAuth>
         <Dashboard></Dashboard>
       </RequireAuth>       
       }>
         <Route index element={<MyOrder></MyOrder>}></Route>
         <Route path='review' element={<AddReview></AddReview>}></Route>
         <Route path='profile' element={<MyProfile></MyProfile>}></Route>
         <Route path='adminMake' element={<MakeAdmin></MakeAdmin>}></Route>
         <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
         <Route path='manageProduct' element={<ManageProducts></ManageProducts>}></Route>
         <Route path='manageOrder' element={<ManageOrders></ManageOrders>}></Route>
       </Route>
       <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
       <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<Signup></Signup>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
