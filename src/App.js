import {BrowserRouter ,Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './page/Home';
import Bookmark from './page/Bookmark';
import Detail from './page/Detail'
import Profile from './page/Profile'
import Search from './page/Search';

function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path = "/bookmark" element = {<Bookmark/>}/>
          <Route path = "/:id" element = {<Detail/>}/>
          <Route path = "/profile" element = {<Profile/>} />
          <Route path = "/search" element = {<Search/>}/>
          <Route path = "/" element = {<Home/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
