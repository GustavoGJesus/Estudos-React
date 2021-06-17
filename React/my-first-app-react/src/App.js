import React from 'react'
import './App.css';
import Header from './header'

function App() {
  return (
    <Header nome="Gustavo Gomes" links = {["About", "Projects", "Contact"]}></Header> //Elemento criado no header
  );
}

export default App;
