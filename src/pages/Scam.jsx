import React from 'react';
import { scamData } from '../data/appData';

function Scam() {
  return (
    <>
      <div className="page-hero page-hero-red"><h1>⚠️ Scam Alerts</h1><p>Common tourist scams in Varanasi & how to avoid them</p></div>
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
        <div className="panel tips-panel" style={{marginTop:'24px'}}>
          <h2 className="panel-title">🔒 General safety tips</h2>
          <ul className="tips-list">
            <li>Always confirm auto fare <strong>before</strong> boarding. If driver refuses, don't ride.</li>
            <li>Government e-boats have fixed rates. Prefer them over private boatmen.</li>
            <li>Licensed guides carry a UP Tourism ID card. Always ask to see it.</li>
            <li>Do not accept free gifts near temples — always leads to a demand for money.</li>
            <li>Avoid shops recommended by your driver — they earn commission there.</li>
            <li>Screenshot FairFare fare ranges before going offline.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Scam;
