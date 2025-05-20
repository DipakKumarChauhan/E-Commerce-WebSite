import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserLayout from './components/Layout/UserLayout';
import Home from './pages/Home';
import { Toaster } from 'sonner';
import ProductDetails from './components/Products/ProductDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import CollectionsPage from './pages/CollectionsPage';
import Checkout from './components/Cart/Checkout.jsx'
import OrderConfirmationPage from './pages/OrderConfirmationPage.jsx';
import OrderDetailsPage from './pages/OrderDetailsPage.jsx';
import MyOrderPage from './pages/MyOrderPage.jsx';
import AdminLayout from './components/Admin/AdminLayout.jsx';
import AdminHomePage from './pages/AdminHomePage.jsx';
import UserManagement from './components/Admin/UserManagement.jsx';
import Productmanagement from './components/Admin/Productmanagement.jsx';
import EditProductPage from './components/Admin/EditProductPage.jsx';
import OrderManagement from './components/Admin/OrderManagement.jsx';
// Dummy components for pages
//  const Home = ()  => <div></div>;
const Men = () => <div>Men Page</div>;
const Women = () => <div>Women Page</div>;
const Topwear = () => <div>Topwear Page</div>;
const Bottomwear = () => <div>Bottomwear Page</div>;
//const Profile = () => <div>Profile Page</div>;

const App = () => {
  return (
    <>
    <Toaster position="top-right" />
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} /> 
        <Route path="profile" element={<Profile/>} />
        <Route path="collections/:collection" element={<CollectionsPage />} /> 
        {/* <Route path="product/:id" element={<ProductDetails />} /> */}
        <Route path = "checkout" element={<Checkout />} />
        <Route path = "order-confirmation" element= {<OrderConfirmationPage/>} />
        <Route path ="order/:id" element= {<OrderDetailsPage/>} />
        <Route path= "/my-orders" element = {<MyOrderPage/>}/>
        

        <Route path="men" element={<Men />} />
        <Route path="women" element={<Women />} />
        <Route path="topwear" element={<Topwear />} />
        <Route path="bottomwear" element={<Bottomwear />} />
        
        {/* Add this route for product details */}
        <Route path="product/:id" element={<ProductDetails />} />
      </Route>
      <Route path= "/admin" element= {<AdminLayout/>}> 
        <Route index element = {<AdminHomePage/>}/>
        <Route path= "users" element ={<UserManagement/> }/>
        <Route path ="products" element = {<Productmanagement/>}/>
        <Route path ="products/:id/edit" element = {<EditProductPage/>}/>
        <Route path = "orders" element = {<OrderManagement/>}/>

      </Route>
    </Routes>
    </>
  );
};

export default App;
