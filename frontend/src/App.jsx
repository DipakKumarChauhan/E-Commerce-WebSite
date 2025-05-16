import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserLayout from './components/Layout/UserLayout';
import Home from './pages/Home';
import { Toaster } from 'sonner';

// Dummy components for pages
//  const Home = ()  => <div></div>;
const Men = () => <div>Men Page</div>;
const Women = () => <div>Women Page</div>;
const Topwear = () => <div>Topwear Page</div>;
const Bottomwear = () => <div>Bottomwear Page</div>;
const Profile = () => <div>Profile Page</div>;

const App = () => {
  return (
    <>
    <Toaster position="top-right" />
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="men" element={<Men />} />
        <Route path="women" element={<Women />} />
        <Route path="topwear" element={<Topwear />} />
        <Route path="bottomwear" element={<Bottomwear />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
    </>
  );
};

export default App;
