import React from 'react';
import { Routes, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ExchangeReading from './routes/ExchangeReading';
import ReadingExercises from './routes/ReadingExercises';

import 'bootstrap/dist/css/bootstrap.min.css';
/*import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/aos/aos.css';
import './assets/vendor/swiper/swiper-bundle.min.css';*/
import './assets/css/main.css'
import Article from './routes/Article';
import ChatSimulation from './routes/chatsimulation/ChatSimulation';

function App() {
  return (
    <>
      <Navigation />
      <main className='main'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/exchangereading" element={<ExchangeReading />} />
          <Route path="/readingexercises" element={<ReadingExercises />} />
          <Route path='/article' element={<Article />} />
          <Route path='/chat-simulation' element={<ChatSimulation />} />
        </Routes>
      </main>
      <Footer/>
    </>
  );
}
export default App;