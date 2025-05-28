import { useState } from 'react';

export default function Register() {
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');
  const [done, setDone] = useState(false);

  function handleRegister(e) {
    e.preventDefault();
    localStorage.setItem('user_' + login, pass);
    setDone(true);
  }

  if (done) return <div>Registered! Now you can <a href="/login">login</a>.</div>;

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <input placeholder="Login" value={login} onChange={e => setLogin(e.target.value)} required />
      <input type="password" placeholder="Password" value={pass} onChange={e => setPass(e.target.value)} required />
      <button type="submit">Register</button>
    </form>
  );
}
