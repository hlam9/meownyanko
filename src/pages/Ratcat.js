import React from 'react';
import './Ratcat.css';
import Slideshow from "../components/slideshow";
import img1 from "../images/01.png";
import img2 from "../images/02.png";
import img3 from "../images/03.png";
import img4 from "../images/04.png";
import img5 from "../images/05.png";
import img6 from "../images/06.png";
import img7 from "../images/07.png";
import img8 from "../images/08.png";
import img9 from "../images/09.png";
import img10 from "../images/10.png";
const collection = [
    { src: img1, caption: "Minecraft Adventures", emote: null },
    { src: img2, caption: "Our Home", emote: <img src="https://cdn.7tv.app/emote/6365118fe5789bebd03825d4/2x.webp" alt="UWU"></img> },
    { src: img3, caption: "The Slaughterhouse", emote: <img src="https://cdn.7tv.app/emote/637a5c7abbea6e3c69f52709/2x.webp" alt="Concerned"></img> },
    { src: img4, caption: "Panda Express", emote:<img src= "https://cdn.7tv.app/emote/63773317e868e71cf61a3d5d/2x.webp" alt="SNIFFA"></img> },
    { src: img5, caption: "Helen's House but she never logged on", emote: <img src= "https://cdn.7tv.app/emote/60b10167824db02a4154dea3/2x.webp" alt="SadgeRain"></img> },
    { src: img6, caption: "Helen's Sex Dungeon", emote: <img src= "https://cdn.7tv.app/emote/60538d8e9d9e96000d244f90/2x.webp" alt="Pawgchamp"></img> },
    { src: img7, caption: "Help ive fallen and i cant get up", emote: <img src= "https://cdn.7tv.app/emote/611523959bf574f1fded6d72/2x.webp" alt="DIESOFCRINGE"></img> },
    { src: img8, caption: "Oh helo", emote: <img src= "https://cdn.7tv.app/emote/61bb5bd95804e220aa6ab613/2x.webp" alt="helo"></img> },
    { src: img9, caption: "SNIFFA", emote: <img src="https://cdn.7tv.app/emote/6375c04aae8e5b69cb9de73b/2x.webp" alt="SNIFFA"></img> },
    { src: img10, caption: ":3", emote: <img src= "https://cdn.discordapp.com/emojis/1147702983384113192.webp?size=96&quality=lossless" alt="nuggietogeth"></img> }
  ];

function Ratcat() {
  return (
    <>
    <div className='uwu'>
      <h1 className='title'>Rats & Cats</h1>
      <br></br>
      <Slideshow
          input={collection}
          ratio={`6.5:3`}
          mode={`automatic`}
          timeout={`5000`}
        />
        
      <br></br>
      {/* <img src="https://cdn.7tv.app/emote/640e3418d7b4e2c3a0141245/4x.webp" alt="Meowa"></img> */}
      
    </div>
    </>
  )
}

export default Ratcat