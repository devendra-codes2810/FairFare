import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Navbar — sticky top bar with all navigation links
// Uses useAuth() to show user name or login/signup buttons
function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setMenuOpen(false);
  };

  const navLinks = [
    { to: '/',          label: 'Home'    },
    { to: '/transport', label: 'Fare'    },
    { to: '/hotels',    label: 'Hotels'  },
    { to: '/food',      label: 'Food'    },
    { to: '/places',    label: 'Places'  },
    { to: '/tickets',   label: 'Tickets' },
    { to: '/scam',      label: 'Alerts'  },
  ];

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
        Fair<span>Fare</span>
      </NavLink>

      {/* Desktop links */}
      <div className="nav-links">
        {navLinks.map(l => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            {l.label}
          </NavLink>
        ))}
      </div>

      {/* Auth buttons */}
      <div className="nav-auth">
        {user ? (
          <>
            <span className="nav-username">Hi, {user.name.split(' ')[0]}</span>
            <button className="btn-outline" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/login"  className="btn-outline">Login</NavLink>
            <NavLink to="/signup" className="btn-solid">Sign Up</NavLink>
          </>
        )}
      </div>

      {/* Hamburger */}
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map(l => (
            <NavLink
              key={l.to} to={l.to} end={l.to === '/'}
              className="mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <hr style={{ borderColor:'rgba(255,255,255,0.08)', margin:'8px 0' }} />
          {user ? (
            <button className="mobile-link" style={{ textAlign:'left', background:'none', border:'none', cursor:'pointer' }} onClick={handleLogout}>
              Logout ({user.name})
            </button>
          ) : (
            <>
              <NavLink to="/login"  className="mobile-link" onClick={() => setMenuOpen(false)}>Login</NavLink>
              <NavLink to="/signup" className="mobile-link" onClick={() => setMenuOpen(false)}>Sign Up</NavLink>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
