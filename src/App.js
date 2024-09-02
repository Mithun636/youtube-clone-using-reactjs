import React from 'react';
import './App.css';
import Slider from './slider';
import { FaYoutube, FaSearch } from "react-icons/fa";




import img1 from './images/img1.jpg';
import img2 from './images/img2.jpeg';
import img3 from './images/img3.jpeg';
import img4 from './images/img4.jpg';

function App() {
  return (
    <div className="App">
      <div className='sidebar'>
        <Slider />
      </div>
      <div className='content'>
        <header className='head'>
          <ul>
            <li>
              <FaYoutube className='logo'/>
              <span>
                <h1>Youtube</h1>
                <input type='text' placeholder='Search...' className='search-input' />
                <FaSearch className='search-icon' />
              </span>
            </li>
          </ul>
        </header>
      </div>
      <div className="grid-container">
        <div className="videos">
          <img src={img1} alt="img 1" />
          <div className="details">
            <h3>Goat Trailer</h3>
            <p>The GOAT (Official Trailer) Tamil: Thalapathy Vijay | Venkat Prabhu | Yuvan Shankar Raja | T-Series
              |Uploaded: Aug 17, 2024
              |47.5M Views<br></br>
              |1.42M Likes</p>
          </div>
        </div>
        <div className="videos">
          <img src={img2} alt="img 2" />
          <div className="details">
            <h3>Mastering HTML Basics</h3>
            <p>Your Ultimate Guide to Begin Web Development 💻 in Tamil | EMC
              Uploaded: Aug 8, 2023
              |
              1.44M Views
              |<br></br>
              37.3K Likes</p>
          </div>
        </div>
        <div className="videos">
          <img src={img3} alt="img 3" />
          <div className="details">
            <h3>Java</h3>
            <p>Java Tutorial for Beginners
              Uploaded: Jul 15, 2019
              |
              11.2M Views
              |<br></br>
              264K Likes</p>
          </div>
        </div>
        <div className="videos">
          <img src={img4} alt="img 4" />
          <div className="details">
            <h3>Marvel's Spider-Man</h3>
            <p>Marvel's Spider-Man - Full Game Walkthrough
              Uploaded: Oct 10, 2023
              |
              104K Views
              |<br></br>
              996 Likes</p>
          </div>
        </div>

      </div>
    </div>
  
  );
}

export default App;
