import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapEmbed } from '../components/Footer';

// Home page – hero, search, feature cards, stats, map
function Home() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');
  const navigate = useNavigate();

  const searchMap = [
    { keys:['auto','fare','taxi','rickshaw','ride'], ans:'Station → Dashashwamedh Ghat auto fare is ₹80–120.', link:'/transport', linkText:'Open Fare Calculator' },
    { keys:['hotel','stay','room','hostel'],          ans:'Budget stays from ₹450/night at Assi Ghat.',          link:'/hotels',    linkText:'View Hotels' },
    { keys:['food','eat','chaat','lassi','kachori'],  ans:'Kashi Chaat ₹40–100 · Blue Lassi ₹60–120.',           link:'/food',      linkText:'View Food' },
    { keys:['scam','cheat','safe','fraud'],           ans:'Common scams: auto overcharging, fake guides.',         link:'/scam',      linkText:'View Alerts' },
    { keys:['boat','ghat','aarti','river'],           ans:'Boat ride ₹150–300/hr. Ganga Aarti is FREE daily ~7pm.', link:'/tickets', linkText:'View Tickets' },
    { keys:['sarnath','buddha','stupa','museum'],     ans:'Sarnath 10km away. Auto ₹150–200. Museum ₹25 (Indian).', link:'/places', linkText:'View Places' },
    { keys:['temple','mandir','vishwanath','kashi'],  ans:'Kashi Vishwanath Temple entry is FREE.',               link:'/places',    linkText:'View Places' },
    { keys:['ticket','entry','fee'],                  ans:'Most temples free. Sarnath ₹25. Boat ₹150–300.',       link:'/tickets',   linkText:'View Tickets' },
  ];

  const handleSearch = () => {
    if (!query.trim()) { setResult(''); return; }
    const q = query.toLowerCase();
    for (const item of searchMap) {
      if (item.keys.some(k => q.includes(k))) {
        setResult({ ans: item.ans, link: item.link, text: item.linkText });
        return;
      }
    }
    setResult({ ans: 'No results. Try: auto fare, hotels, food, boat, scam, sarnath.' });
  };

  const features = [
    { icon:'🚕', title:'Fare Calculator', desc:'Real auto & taxi price before you ride.', to:'/transport', cls:'card-orange' },
    { icon:'🏨', title:'Hotels',          desc:'Budget to premium stays, honest prices.',  to:'/hotels',    cls:'card-teal'   },
    { icon:'🍜', title:'Street Food',     desc:'Famous Banarasi spots & what to pay.',     to:'/food',      cls:'card-red'    },
    { icon:'📍', title:'Tourist Places',  desc:'Top attractions with timings & fares.',    to:'/places',    cls:'card-blue'   },
    { icon:'🎫', title:'Ticket Prices',   desc:'Entry fees for temples & boat rides.',     to:'/tickets',   cls:'card-purple' },
    { icon:'⚠️', title:'Scam Alerts',     desc:'Common tourist scams & how to avoid.',     to:'/scam',      cls:'card-dark'   },
  ];

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">🇮🇳 Varanasi Edition</div>
          <h1>Travel Smart.<br />Pay <span className="accent">Fair</span>.</h1>
          <p className="hero-sub">Real auto fares, hotel prices & street food costs — so no one overcharges you.</p>
          <div className="search-bar">
            <input
              type="text" value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSearch()}
              placeholder="Search routes, hotels, food, places..."
            />
            <button onClick={handleSearch}>Search</button>
          </div>
          {result && (
            <div className="search-result">
              {result.ans}
              {result.link && <Link to={result.link} className="search-result-link">&nbsp;{result.text} →</Link>}
            </div>
          )}
        </div>

        <div className="hero-stats">
          {[['24+','Auto Routes'],['18','Hotels Listed'],['30+','Food Spots'],['12','Scam Alerts']].map(([n,l]) => (
            <div key={l} className="stat">
              <span className="stat-num">{n}</span>
              <span className="stat-label">{l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="features">
        <h2 className="section-title">Everything a traveler needs</h2>
        <div className="feature-grid">
          {features.map(f => (
            <Link key={f.to} to={f.to} className={`feature-card ${f.cls}`}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
              <span className="card-arrow">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* MAP */}
      <section className="map-section">
        <h2 className="section-title">Varanasi — key locations</h2>
        <p className="section-sub">Explore the city before you arrive</p>
        <div className="map-wrapper">
          <MapEmbed query="varanasi ghats temples uttar pradesh" height={420} />
        </div>
      </section>
    </>
  );
}

export default Home;
