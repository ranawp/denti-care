import { Route, Routes } from 'react-router-dom';
import About from './Page/About/About';
import Home from './Page/Home/Home/Home';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import Blog from './Page/Blog/Blog';
import CheckOut from './CheckOut/CheckOut';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/service/:serviceId' element={<CheckOut></CheckOut>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}> </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
