import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      setToken(response.data.token);
      // Clear username and password fields after successful login
      setUsername('');
      setPassword('');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleProtectedRequest = async () => {
    try {
      const response = await axios.get('http://localhost:5000/protected', {
        headers: {
          Authorization: token
        }
      });
      console.log('Protected data:', response.data);
    } catch (error) {
      console.error('Protected request error:', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <hr />
      <h1>Protected Route</h1>
      <button onClick={handleProtectedRequest} disabled={!token}>Access Protected Route</button>
    </div>
  );
}

export default App;

