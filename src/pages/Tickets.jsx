import React from 'react';
import { attractionTickets, activityTickets } from '../data/appData';

function Tickets() {
  return (
    <>
      <div className="page-hero"><h1>🎫 Ticket Prices</h1><p>Entry fees for temples, museums & activities</p></div>
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
        <div className="panel" style={{marginTop:'24px'}}>
          <h2 className="panel-title">Boat rides & activities</h2>
          <div className="ticket-table-wrap">
            <table className="ticket-table">
              <thead><tr><th>Activity</th><th>Price range</th><th>Status</th></tr></thead>
              <tbody>
                {activityTickets.map((t,i) => (
                  <tr key={i}>
                    <td>{t.name}</td><td>{t.price}</td>
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
export default Tickets;
