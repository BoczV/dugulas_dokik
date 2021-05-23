import React from 'react';
import '../style/Navbar.css'


function Navbar() {
    return (
      <div className="header">
      <p className="home" href="/" id="logo">
        Dugulásdokik
      </p>

      <nav>
        <ul>
          <li>
            <a href="/">Főoldal</a>
          </li>
          <li>
            <a href="/">Körzetek, ahova kijárunk</a>
          </li>
          <li>
            <a href="/">Időpontfoglalás</a>
          </li>
          <li>
            <a href="/">SOS elhárítás</a>
          </li>
          <li>
            <a href="/">Dokik</a>
          </li>
          <li>
            <a href="/">Kontakt</a>
          </li>
        </ul>
      </nav>
    </div>
    );
}

export default Navbar
