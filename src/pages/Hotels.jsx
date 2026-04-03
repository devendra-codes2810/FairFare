import React, { useState } from 'react';
import { hotelsData } from '../data/appData';
import { MapEmbed } from '../components/Footer';

function Hotels() {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? hotelsData : hotelsData.filter(h => h.cat === filter);
  const catClass = { budget:'cat-budget', mid:'cat-mid', premium:'cat-premium' };
  const catLabel = { budget:'Budget', mid:'Mid-range', premium:'Premium' };
  return (
    <>
      <div className="page-hero"><h1>🏨 Hotels in Varanasi</h1><p>Honest prices — budget to premium</p></div>
      <div className="container">
        <div className="filter-bar">
          {[['all','All'],['budget','Budget (under ₹1000)'],['mid','Mid (₹1000–3000)'],['premium','Premium (₹3000+)']].map(([v,l]) => (
            <button key={v} className={`filter-btn${filter===v?' active':''}`} onClick={()=>setFilter(v)}>{l}</button>
          ))}
        </div>
        <div className="hotel-grid">
          {filtered.map(h => (
            <div key={h.id} className="hotel-card">
              <div className="hotel-name">{h.name}</div>
              <div className="hotel-stars">{'★'.repeat(h.stars)}{'☆'.repeat(5-h.stars)}</div>
              <div className="hotel-price">₹{h.price.toLocaleString('en-IN')}<span>/night</span></div>
              <div className="hotel-location">📍 {h.loc}</div>
              <div className="hotel-amenities">{h.amenities}</div>
              <span className={`hotel-cat ${catClass[h.cat]}`}>{catLabel[h.cat]}</span>
            </div>
          ))}
        </div>
        <div className="panel" style={{marginTop:'32px'}}>
          <h2 className="panel-title">Hotel locations on map</h2>
          <MapEmbed query="hotels near varanasi ghats" height={380} />
        </div>
      </div>
    </>
  );
}
export default Hotels;
