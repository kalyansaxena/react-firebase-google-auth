import { signOut } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const Home = () => {

  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>Welcome to React Firebase Google Authentication</h1>
      <hr />
      <h2>{user && user.email}</h2>
      {user && (<img src={user.photoURL} alt="profile" />)}
      <hr />
      <button onClick={handleLogout} className='logout-btn'>Logout</button>
    </div>
  )
}

export default Home