import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // React Router-dən istifadə edirsinizsə

const adminData = {
  username: "admin",
  password: "1"
};

 export const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Giriş müvəffəqiyyətli olarsa, yönləndirmək üçün

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === adminData.username && password === adminData.password) {
      setError('');
      navigate('/dashboard'); // Müvəffəqiyyətli girişdən sonra dashboard-a yönləndirir
    } else {
      setError('İstifadəçi adı və ya şifrə yalnışdır!');
    }
  };
  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
      <h2>Admin Login</h2>
        <div>
          <label>Username</label><br />
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="username"
            required
          />
        </div>
        <div>
          <label>Password</label><br />
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="password"
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};




export const Dashboard =()=>{
    return(
        <section style={{height:"40vh",position:"relative",left:"30%"}}>
        <Link to='/dashboard'>
        <Link  className='btn btn-success m-5' to='/productdashboard'>Products Dashboard</Link>
        <Link  className='btn btn-success m-5' to='/categorydashboard'>Category Dashboard</Link>
        </Link>
        <Link to="/admin" className="btn btn-warning">
        Back
      </Link>
        </section>
    )

    
};


