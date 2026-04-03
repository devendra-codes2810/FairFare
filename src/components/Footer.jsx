import React from 'react';
import { NavLink } from 'react-router-dom';

// Footer component
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">Fair<span>Fare</span></div>
        <p>Helping travelers pay fair prices in Varanasi.</p>
        <p style={{ fontSize:'12px', marginTop:'4px' }}>
          Built by Devendra &nbsp;|&nbsp; B.Tech CSE Final Year Project
        </p>
        <div className="footer-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/transport">Fare</NavLink>
          <NavLink to="/hotels">Hotels</NavLink>
          <NavLink to="/food">Food</NavLink>
          <NavLink to="/scam">Scam Alerts</NavLink>
        </div>
      </div>
    </footer>
  );
}

// MapEmbed — reusable Google Maps iframe component
// Props:
//   query    (string)  – the search query for Google Maps
//   height   (number)  – iframe height in px (default 380)
//   note     (string)  – optional caption below map
export function MapEmbed({ query, height = 380, note }) {
  const encoded = encodeURIComponent(query);
  const src = `https://maps.google.com/maps?q=${encoded}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="map-embed-wrapper">
      <iframe
        src={src}
        title={`Map – ${query}`}
        width="100%"
        height={height}
        style={{ border: 0, borderRadius: '12px', display: 'block' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      {note && <p className="map-note">📍 {note}</p>}
    </div>
  );
}

export default Footer;
