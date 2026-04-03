import React from 'react';
import { placesData } from '../data/appData';
import { MapEmbed } from '../components/Footer';

function Places() {
  return (
    <>
      <div className="page-hero"><h1>📍 Tourist Places</h1><p>Top attractions with timings & how to reach them</p></div>
      <div className="container">
        <div className="places-grid">
          {placesData.map(p => (
            <div key={p.id} className="place-card">
              <div className="place-name">{p.name}</div>
              <div className="place-desc">{p.desc}</div>
              <div className="place-meta">
                <span>🕐 {p.timing}</span>
                <span>🚕 {p.fare}</span>
                <span>📍 {p.dist}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="panel" style={{marginTop:'32px'}}>
          <h2 className="panel-title">Tourist spots on map</h2>
          <MapEmbed query="tourist places varanasi ghats temples sarnath" height={400} />
        </div>
      </div>
    </>
  );
}
export default Places;
