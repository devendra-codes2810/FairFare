import React, { useState } from 'react';
import { fareDB, vehicleOptions, fromOptions, toOptions, quickRoutes } from '../data/fareData';
import { MapEmbed } from '../components/Footer';

function Transport() {
  const [from, setFrom] = useState(fromOptions[0]);
  const [to,   setTo]   = useState(toOptions[0]);
  const [vehicle, setVehicle] = useState('auto');
  const [fareResult, setFareResult] = useState(null);

  // Review state
  const [reviews, setReviews] = useState([
    { name:'Priya S.',  route:'Station → Dashashwamedh Ghat', price:'₹100', text:'Driver demanded ₹400 but I showed FairFare. He agreed for ₹100. This app saved me!' },
    { name:'Rahul M.',  route:'Boat ride – Dashashwamedh',    price:'₹200', text:'Boatman quoted ₹800. I negotiated to ₹200 using the fair price guide here.' },
  ]);
  const [rName, setRName]   = useState('');
  const [rRoute, setRRoute] = useState('');
  const [rPrice, setRPrice] = useState('');
  const [rText,  setRText]  = useState('');

  // Map query updates when from/to change
  const mapQuery = `${from} to ${to} varanasi`;

  const calcFare = () => {
    if (from === to) { setFareResult({ error:'Please select different from and to locations.' }); return; }
    const key  = `${from}|${to}`;
    const rkey = `${to}|${from}`;
    const data = fareDB[key] || fareDB[rkey];
    if (!data) { setFareResult({ error:'Route data not available. Try a common route listed below.' }); return; }
    const range = data[vehicle];
    const vLabel = vehicleOptions.find(v => v.value === vehicle)?.label;
    if (!range) { setFareResult({ error:`${vLabel} is not available on this route. Try Auto or Taxi.` }); return; }
    const [mn, mx] = range;
    setFareResult({ from, to, mn, mx, max: Math.round(mx * 1.3), vLabel });
  };

  const submitReview = () => {
    if (!rText.trim()) { alert('Please write your experience.'); return; }
    setReviews([{ name: rName || 'Anonymous', route: rRoute || 'General', price: rPrice ? `₹${rPrice}` : 'Not mentioned', text: rText }, ...reviews]);
    setRName(''); setRRoute(''); setRPrice(''); setRText('');
  };

  return (
    <>
      <div className="page-hero">
        <h1>🚕 Fare Calculator</h1>
        <p>Check real auto & taxi prices before you travel</p>
      </div>

      <div className="container">
        <div className="two-col">

          {/* Calculator */}
          <div className="panel">
            <h2 className="panel-title">Calculate your fare</h2>
            <div className="form-group">
              <label>From</label>
              <select value={from} onChange={e => setFrom(e.target.value)}>
                {fromOptions.map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>To</label>
              <select value={to} onChange={e => setTo(e.target.value)}>
                {toOptions.map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>Vehicle type</label>
              <select value={vehicle} onChange={e => setVehicle(e.target.value)}>
                {vehicleOptions.map(v => <option key={v.value} value={v.value}>{v.label}</option>)}
              </select>
            </div>
            <button className="btn-primary full-width" onClick={calcFare}>Check Fair Price</button>

            {fareResult && (
              <div className="fare-result">
                {fareResult.error ? (
                  <div className="fare-card"><p className="text-muted">{fareResult.error}</p></div>
                ) : (
                  <div className="fare-card">
                    <p className="fare-route">{fareResult.from} → {fareResult.to} | {fareResult.vLabel}</p>
                    <div className="fare-amount">₹{fareResult.mn} – ₹{fareResult.mx}</div>
                    <div className="alert-ok">✓ Fair price confirmed. Do not pay above ₹{fareResult.max}.</div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Map — updates with selected route */}
          <div className="panel">
            <h2 className="panel-title">Route on map</h2>
            <MapEmbed query={mapQuery} height={330} note="Map updates based on your selected route" />
          </div>
        </div>

        {/* Quick Routes */}
        <div className="panel" style={{ marginTop:'24px' }}>
          <h2 className="panel-title">Common routes — quick reference</h2>
          <div className="routes-table">
            <div className="route-header">
              <span>Route</span><span>Auto</span><span>Taxi</span><span>Status</span>
            </div>
            {quickRoutes.map((r, i) => (
              <div key={i} className="route-row">
                <span>{r.route}</span>
                <span>{r.auto}</span>
                <span>{r.taxi}</span>
                <span className={r.status === 'fair' ? 'badge-ok' : 'badge-warn'}>
                  {r.status === 'fair' ? 'Fair' : 'Negotiate'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="panel" style={{ marginTop:'24px' }}>
          <h2 className="panel-title">Traveler price reports</h2>
          <div className="review-form">
            <div className="form-row-3">
              <input placeholder="Your name"              value={rName}  onChange={e => setRName(e.target.value)} />
              <input placeholder="Route (e.g. Station → Ghat)" value={rRoute} onChange={e => setRRoute(e.target.value)} />
              <input placeholder="Price paid (₹)" type="number" value={rPrice} onChange={e => setRPrice(e.target.value)} />
            </div>
            <textarea placeholder="Share your experience — actual fare paid, was driver fair? Tips for other travelers..." value={rText} onChange={e => setRText(e.target.value)} />
            <button className="btn-primary" onClick={submitReview}>Submit report</button>
          </div>
          <div className="reviews-list">
            {reviews.map((r, i) => (
              <div key={i} className="review-item">
                <div className="review-meta">{r.name} · {r.route} · Paid: {r.price}</div>
                <div className="review-text">{r.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Transport;
