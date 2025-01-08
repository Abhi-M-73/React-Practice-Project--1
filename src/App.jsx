import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import Details from './components/Details';
import Edit from './components/Edit';

const App = () => {
  return (
    <div className=" bg-white text-black">
        <div className="flex flex-col md:flex-row">
          {/* Navbar */}
          <Navbar />
          
          {/* Main Content */}
          <div className="w-full p-4 md:pl-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<Create />} />
              <Route path="/details/:id" element={<Details />} />
              <Route path="/edit/:id" element={<Edit />} />
            </Routes>
          </div>
        </div>
    </div>
  );
};

export default App;
