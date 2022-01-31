import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/contents/Home.js';
import Items from './components/contents/Items.js';
import Groceries from './components/contents/Groceries.js';

function App() {
  return (
    <>
      <Header />
      <div class="contents">
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/items" element={<Items />} />
            <Route path="/groceries" element={<Groceries />} />
            <Route path="*" element={<Navigate replace to="/home" />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
