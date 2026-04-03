import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// LOGIN PAGE
export function Login() {
  const [email, setEmail]     = useState('');
  const [password, setPass]   = useState('');
  const [error, setError]     = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate  = useNavigate();

  const handleLogin = async () => {
    setError('');
    if (!email || !password) { setError('Please enter email and password.'); return; }
    setLoading(true);
    // Simulate slight delay (real API would be async)
    await new Promise(r => setTimeout(r, 400));
    const result = login(email, password);
    setLoading(false);
    if (result.success) navigate('/');
    else setError(result.error);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">Fair<span>Fare</span></div>
        <h2>Welcome back</h2>
        <p className="auth-sub">Login to save routes & share price reports</p>

        {error && <div className="auth-msg-err">{error}</div>}

        <div className="form-group">
          <label>Email address</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)}
            placeholder="you@email.com" onKeyDown={e => e.key==='Enter' && handleLogin()} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" value={password} onChange={e => setPass(e.target.value)}
            placeholder="Enter password" onKeyDown={e => e.key==='Enter' && handleLogin()} />
        </div>

        <button className="btn-primary full-width" onClick={handleLogin} disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <div className="auth-divider">or</div>
        <p className="auth-switch">Don't have an account? <Link to="/signup">Sign up free</Link></p>

        <div className="demo-box">
          💡 Demo login: <strong>demo@fairfare.in</strong> / <strong>demo123</strong>
        </div>
      </div>
    </div>
  );
}

// SIGNUP PAGE
export function Signup() {
  const [name,  setName]      = useState('');
  const [email, setEmail]     = useState('');
  const [pass,  setPass]      = useState('');
  const [pass2, setPass2]     = useState('');
  const [error, setError]     = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate   = useNavigate();

  const handleSignup = async () => {
    setError('');
    if (!name || !email || !pass || !pass2) { setError('Please fill in all fields.'); return; }
    if (pass.length < 6)  { setError('Password must be at least 6 characters.'); return; }
    if (pass !== pass2)   { setError('Passwords do not match.'); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 400));
    const result = signup(name, email, pass);
    setLoading(false);
    if (result.success) navigate('/');
    else setError(result.error);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">Fair<span>Fare</span></div>
        <h2>Create account</h2>
        <p className="auth-sub">Join travelers helping each other pay fair prices</p>

        {error && <div className="auth-msg-err">{error}</div>}

        <div className="form-group">
          <label>Full name</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your name" />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@email.com" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" value={pass} onChange={e => setPass(e.target.value)} placeholder="Min 6 characters" />
        </div>
        <div className="form-group">
          <label>Confirm password</label>
          <input type="password" value={pass2} onChange={e => setPass2(e.target.value)} placeholder="Repeat password"
            onKeyDown={e => e.key==='Enter' && handleSignup()} />
        </div>

        <button className="btn-primary full-width" onClick={handleSignup} disabled={loading}>
          {loading ? 'Creating account...' : 'Create account'}
        </button>

        <div className="auth-divider">or</div>
        <p className="auth-switch">Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

export default Login;
