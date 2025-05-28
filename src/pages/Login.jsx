import { useState } from 'react';

export default function Login() {
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const [ok, setOk] = useState(false);

  function handleLogin(e) {
    e.preventDefault();
    const stored = localStorage.getItem('user_' + login);
    if (stored === pass) {
      localStorage.setItem('currentUser', login);
      setOk(true);
    } else {
      setError('Invalid credentials');
    }
  }

  if (ok) return <div>Logged in! <a href="/">Go home</a></div>;

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      {error && <div style={{color:'red'}}>{error}</div>}
      <input placeholder="Login" value={login} onChange={e => setLogin(e.target.value)} required />
      <input type="password" placeholder="Password" value={pass} onChange={e => setPass(e.target.value)} required />
      <button type="submit">Login</button>
    </form>
  );
}
