import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import InventoryPrivate from './Pages/InventoryPrivate/InventoryPrivate';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import AddnewItem from './Pages/AddnewItem/AddnewItem';
import Myitems from './Pages/Myitems/Myitems';
import Blogs from './Pages/Blogs/Blogs';
import Nopage from './Pages/Nopage/Nopage';
import Getallreview from './Pages/Getallreview/Getallreview';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/inventory/:id' element={<RequireAuth><InventoryPrivate></InventoryPrivate></RequireAuth>}></Route>
        <Route path='/manageinventoreis' element={<RequireAuth><ManageInventories></ManageInventories></RequireAuth>}></Route>
        <Route path='/addnew' element={<RequireAuth><AddnewItem></AddnewItem></RequireAuth>}></Route>
        <Route path='/myitems' element={<RequireAuth><Myitems></Myitems></RequireAuth>}></Route>
        <Route path='/allreview' element={<RequireAuth><Getallreview></Getallreview></RequireAuth>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<Nopage></Nopage>}></Route>
      </Routes>
    </>
  );
}

export default App;
