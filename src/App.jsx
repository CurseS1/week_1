import React from 'react';
import './App.css';

function Portofolio() {
  return React.createElement('div', { className: 'portofolio' },
    React.createElement('div', { className: 'profil' },
      React.createElement('img', { src: '/342220.jpg', alt: 'logo' })
    ),
    React.createElement('div', { className: 'info' },
      React.createElement('h2', null, 'Nama: Edgar Tanamal'),
      React.createElement('div', null,
        React.createElement('p', null, 'Gender: Pria')
      ),
      React.createElement('div', { className: 'pengalaman' },
        React.createElement('h3', null, 'Pengalaman:'),
        React.createElement('ul', null,
          React.createElement('li', null, 'Tidur'),
          React.createElement('li', null, 'Makan'),
          React.createElement('li', null, 'Kuliah')
        )
      )
    )
  );
}

export default Portofolio;
