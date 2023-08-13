import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Components/store'

import Navbar from './Components/Navbar';
import About from './Components/About';
import Footer from './Components/Footer';
import ContactForm from './Components/ContactUs';
import TodoList from './Components/TODO';

function App() {
  const [mode, setMode] = useState('light');
  const [text, settext] = useState('dark');

  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  });

  const aboutMode = () => {
    if (mode === 'dark') {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      })
    }
    else {
      setMyStyle({
        color: 'white',
        backgroundColor: '#1E2B39'
      })
    }
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      settext('light');
      document.body.style.backgroundColor = '#2C474C';
    }
    else {
      setMode('light');
      settext('dark');
      document.body.style.backgroundColor = 'rgb(225, 222, 219)';
    }
  }

  return (
    <>
      <Navbar name="To-Do App" home="Home" about="About" contactus="Contact Us" mode={mode} text={text} togglemode={toggleMode} aboutmode={aboutMode} />

      <Provider store={store}>/
        <Routes>
          <Route path="/" element={<TodoList mode={mode} />} />
          <Route path="/home" element={<TodoList mode={mode} />} />
          <Route path="/about" element={<About mystyle={myStyle} mode={mode} />} />
          <Route path="/contactus" element={<ContactForm mode={mode} />} />
        </Routes>
        <Footer mode={mode} />
      </Provider>
    </>
  );
}

export default App;
