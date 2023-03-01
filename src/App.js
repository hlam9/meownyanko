// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import ClipList from './Clips/ClipList';
import SnowFlake from './SnowFlakes/SnowFlake';
function App() {
  const [isLoading, setisLoading] = useState(false);
  const [loadedClips, setLoadedClips] = useState([]);
  const meow = {
    title: "123",
    youtubeEmbed: "Dorf8i6lCuk",
    desc: "HELLOGE"
  
  }
  
  function Poster(){
    axios.post('https://meow-46766-default-rtdb.firebaseio.com/meow.json', JSON.stringify(meow))
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log("hi");
  }
    useEffect(()=>{
      axios.get('https://meow-46766-default-rtdb.firebaseio.com/meow.json')
      .then(function (response) {
        let data = Object.keys(response.data).map(i => response.data[i])
        setisLoading(false);
        setLoadedClips(data);
      })
      .catch(function (error) {
        console.log(error);
      });
    }, [])
    
    if(isLoading){
      return (
        <section>
          <p>Loading...</p>
        </section>
      )
    }
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Navbar />} />
          <Route path='/meow' element={<Navbar />} />
          <Route path='/meowing' element={<Navbar />} />
        </Routes>
      </Router>
      
      <header className="App-header">
      <h1>Hi</h1>
      <button onClick={Poster}>Helloge</button>
      <img src="https://cdn.discordapp.com/emojis/776007413576368198.webp?size=96&quality=lossless" alt="agontfHi" />
      <img src="https://cdn.7tv.app/emote/638767f24cc489ef45239272/2x.webp" alt="peepoShy"></img>
      </header>
		<h1>Youtube Embed</h1>

    <ClipList clips={loadedClips}></ClipList>
    
    <SnowFlake />
    </div>
    
  );
}


export default App;

