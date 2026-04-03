// Hotels.jsx
import React, { useState } from 'react';
import { hotelsData } from '../data/appData';
import { MapEmbed } from '../components/Footer';

export function Hotels() {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? hotelsData : hotelsData.filter(h => h.cat === filter);
  const catClass = { budget:'cat-budget', mid:'cat-mid', premium:'cat-premium' };
  const catLabel = { budget:'Budget', mid:'Mid-range', premium:'Premium' };

  return (
    <>
      <div className="page-hero">
        <h1>🏨 Hotels in Varanasi</h1>
        <p>Honest prices — budget to premium</p>
      </div>
      <div className="container">
        <div className="filter-bar">
          {[['all','All'],['budget','Budget (under ₹1000)'],['mid','Mid (₹1000–3000)'],['premium','Premium (₹3000+)']].map(([v,l]) => (
            <button key={v} className={`filter-btn${filter===v?' active':''}`} onClick={() => setFilter(v)}>{l}</button>
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
        <div className="panel" style={{ marginTop:'32px' }}>
          <h2 className="panel-title">Hotel locations on map</h2>
          <MapEmbed query="hotels near varanasi ghats" height={380} />
        </div>
      </div>
    </>
  );
}

// Food.jsx
import React from 'react';
import { foodData } from '../data/appData';
import { MapEmbed } from '../components/Footer';

export function Food() {
  return (
    <>
      <div className="page-hero">
        <h1>🍜 Street Food Guide</h1>
        <p>Famous Banarasi spots & what you should actually pay</p>
      </div>
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
        <div className="panel" style={{ marginTop:'32px' }}>
          <h2 className="panel-title">Food spots on map</h2>
          <MapEmbed query="street food Godaulia chowk varanasi" height={360} />
        </div>
      </div>
    </>
  );
}

// Places.jsx
import React from 'react';
import { placesData } from '../data/appData';
import { MapEmbed } from '../components/Footer';

export function Places() {
  return (
    <>
      <div className="page-hero">
        <h1>📍 Tourist Places</h1>
        <p>Top attractions with timings & how to reach them</p>
      </div>
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
        <div className="panel" style={{ marginTop:'32px' }}>
          <h2 className="panel-title">Tourist spots on map</h2>
          <MapEmbed query="tourist places varanasi ghats temples sarnath" height={400} />
        </div>
      </div>
    </>
  );
}

// Tickets.jsx
import React from 'react';
import { attractionTickets, activityTickets } from '../data/appData';

export function Tickets() {
  return (
    <>
      <div className="page-hero">
        <h1>🎫 Ticket Prices</h1>
        <p>Entry fees for temples, museums & activities</p>
      </div>
      <div className="container">
        <div className="panel">
          <h2 className="panel-title">Attractions & entry fees</h2>
          <div className="ticket-table-wrap">
            <table className="ticket-table">
              <thead><tr><th>Attraction</th><th>Indian</th><th>Foreigner</th><th>Note</th></tr></thead>
              <tbody>
                {attractionTickets.map((t,i) => (
                  <tr key={i}>
                    <td>{t.name}</td>
                    <td className={t.indian==='Free'?'price-free':''}>{t.indian}</td>
                    <td className={t.foreign==='Free'?'price-free':''}>{t.foreign}</td>
                    <td>{t.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="panel" style={{ marginTop:'24px' }}>
          <h2 className="panel-title">Boat rides & activities</h2>
          <div className="ticket-table-wrap">
            <table className="ticket-table">
              <thead><tr><th>Activity</th><th>Price range</th><th>Status</th></tr></thead>
              <tbody>
                {activityTickets.map((t,i) => (
                  <tr key={i}>
                    <td>{t.name}</td>
                    <td>{t.price}</td>
                    <td><span className={t.status==='fixed'?'badge-ok':'badge-warn'}>{t.status==='fixed'?'Fixed rate':'Negotiate'}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

// Scam.jsx
import React from 'react';
import { scamData } from '../data/appData';

export function Scam() {
  return (
    <>
      <div className="page-hero page-hero-red">
        <h1>⚠️ Scam Alerts</h1>
        <p>Common tourist scams in Varanasi & how to avoid them</p>
      </div>
      <div className="container">
        <div className="scam-grid">
          {scamData.map(s => (
            <div key={s.id} className="scam-card">
              <div className="scam-title">⚠ {s.id}. {s.title}</div>
              <div className="scam-body">{s.body}</div>
              <div className="scam-tip">✓ Tip: {s.tip}</div>
            </div>
          ))}
        </div>
        <div className="panel tips-panel" style={{ marginTop:'24px' }}>
          <h2 className="panel-title">🔒 General safety tips</h2>
          <ul className="tips-list">
            <li>Always confirm auto fare <strong>before</strong> boarding. If driver refuses, don't ride.</li>
            <li>Government e-boats have fixed rates. Prefer them over private boatmen.</li>
            <li>Licensed guides carry an ID card issued by UP Tourism. Always ask to see it.</li>
            <li>Do not accept free gifts near temples — it always leads to a demand for money.</li>
            <li>Avoid shops recommended by your driver or guide — they earn commission there.</li>
            <li>Screenshot FairFare fare ranges before going offline.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
