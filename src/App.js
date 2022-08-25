import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Home_components/Header";
import Footer from "./components/Home_components/Footer";
import Home from "./page/Home";
import Bookmark from "./page/Bookmark";
import Detail from "./page/Detail";
import Profile from "./page/Profile";
import Search from "./page/Search";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />

        <Route path="/" element={<Home />} />
        <Route path="/home/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
