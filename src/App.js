import Header from 'components/Header';
import Footer from 'components/Footer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from 'components/contents/Home.js';
import Items from 'components/contents/Items.js';
import Members from 'components/contents/Members';
import Groceries from 'components/contents/Groceries.js';
import Login from 'components/contents/Login.js';
import './index.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="contents">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/members" element={<Members />} />
          <Route path="/groceries" element={<Groceries />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate replace to="/home" />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
