import Header from 'components/Header';
import Footer from 'components/Footer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from 'components/contents/Home.js';
import Items from 'components/contents/Items.js';
import Groceries from 'components/contents/Groceries.js';
import Members from 'components/contents/Members.js';
import './index.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="contents">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/groceries" element={<Groceries />} />
          <Route path="/members" element={<Members />} />
          <Route path="*" element={<Navigate replace to="/home" />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
