import React from 'react';
import { foodData } from '../data/appData';
import { MapEmbed } from '../components/Footer';

function Food() {
  return (
    <>
      <div className="page-hero"><h1>🍜 Street Food Guide</h1><p>Famous Banarasi spots & what you should actually pay</p></div>
      <div className="container">
        <div className="food-grid">
          {foodData.map(f => (
            <div key={f.id} className="food-card">
              <div className="food-card-top">
                <div className="food-name">{f.name}</div>
                <div className="food-price">{f.price}</div>
              </div>
              <div className="food-place">📍 {f.loc}</div>
              <div className="food-desc">{f.desc}</div>
              <span className="food-tag">{f.tag}</span>
            </div>
          ))}
        </div>
        <div className="panel" style={{marginTop:'32px'}}>
          <h2 className="panel-title">Food spots on map</h2>
          <MapEmbed query="street food Godaulia chowk varanasi" height={360} />
        </div>
      </div>
    </>
  );
}
export default Food;
