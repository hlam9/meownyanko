import React, { useState, useEffect, useRef } from 'react';
import ClipList from '../Clips/ClipList';
import axios from 'axios';
import './Home.css';
function Home() {
  const [isLoading, setisLoading] = useState(false);
  const [loadedClips, setLoadedClips] = useState([]);
  const uwudata = useRef("");
//   const meow = {
//     title: "Fall Cat",
//     emote: "https://cdn.7tv.app/emote/632b50cec7950e03fc6ee844/4x.webp",
//     youtubeEmbed: "SqejaOfOgVg",
//     gameCategory: "Fall Guys",
//     time: 96,
//     desc: "Meow"
//   }
  
//   function Poster(){
//     var exists = false;
//     uwudata.current.forEach((item)=>{
//       if(item.youtubeEmbed === meow.youtubeEmbed){
//         exists = true;
//       }
//     })
//     if(!exists){
//       axios.post('https://meow-46766-default-rtdb.firebaseio.com/meow.json', JSON.stringify(meow))
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//       console.log("hi");
//     }
//   }
    useEffect(()=>{
      axios.get('https://meow-46766-default-rtdb.firebaseio.com/meow.json')
      .then(function (response) {
        let data = Object.keys(response.data).map(i => response.data[i])
        uwudata.current = data;
        setisLoading(false);
        setLoadedClips(data);
        console.log(data);
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
    <>
    
    <header className="App-header">
    <h1>Welcome</h1>
      {/* <button onClick={Poster}>Helloge</button> */}
      <img src="https://cdn.discordapp.com/emojis/776007413576368198.webp?size=96&quality=lossless" alt="agontfHi" />
      <br />
      <img src="https://cdn.7tv.app/emote/638767f24cc489ef45239272/2x.webp" alt="peepoShy"></img>
      <br />
      <img src="https://cdn.7tv.app/emote/6268e21383dd8019c6c79a45/4x.webp" alt="big" />
      <br />
      </header>
    
    <ClipList clips={loadedClips}></ClipList>
    </>
  )
}

export default Home