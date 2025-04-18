import React from 'react';
import { Routes, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navbar from './components/Navbar';
import Head from './components/Head';
import ExchangeReading from './routes/ExchangeReading';
import ReadingExercises from './routes/ReadingExercises';

import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/aos/aos.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/css/main.css'

function App() {
  return (
    <>
      <Head />
      <Navbar />
      <main className='main'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/exchangereading" element={<ExchangeReading />} />
          <Route path="/readingexercises" element={<ReadingExercises />} />
        </Routes>
      </main>
    </>
  );
}
export default App;