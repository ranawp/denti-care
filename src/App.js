import { Route, Routes } from 'react-router-dom';
import About from './Page/About/About';
import Home from './Page/Home/Home/Home';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/about' element={<About></About>}> </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
