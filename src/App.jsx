import React, { useState } from 'react';
import './App.css';

function App() {
  const [isCircular, setIsCircular] = useState(false);

  const imgStyle = {
    width: '40%',
    borderRadius: isCircular ? '50%' : '0%', // Apply border-radius to make it circular
  };

  const pengalamanStyle = {
    border: '2px solid #000',
    padding: '10px',
  };

  const toggleCircular = () => {
    setIsCircular(!isCircular);
  };

  return (
    <div className="App">
      <div className="profile-container">
        <img src="/342220.jpg" className="App-logo" alt="logo" style={imgStyle} />
      </div>

      <div className="profile-info">
        <h3 className="name">Edgar Tanamal</h3>
      </div>

      <div className="gender">
        <p>Gender</p>
        <p>goblok</p>
      </div>

      <div className="userInfo">
        <div className="info">
          <h2>Profile</h2>
        </div>
      </div>

      <div className="Pengalaman" style={pengalamanStyle}>
        <h2 className="title">Pengalaman Organisasi</h2>
        <p>tes</p>
        
        {/* Move the button below the "Pengalaman Organisasi" section */}
        <button onClick={toggleCircular}>Resize Fotto</button>
      </div>
    </div>
  );
}

export default App;
