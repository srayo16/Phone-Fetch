import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Shared/Header/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import InventoryPrivate from './Pages/InventoryPrivate/InventoryPrivate';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import ManageInventories from './Pages/ManageInventories/ManageInventories';

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
        <Route path='/manageinventoreis' element={<ManageInventories></ManageInventories>}></Route>
      </Routes>
    </>
  );
}

export default App;
