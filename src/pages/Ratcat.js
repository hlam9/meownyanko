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
    { src: img1, caption: "Caption one" },
    { src: img2, caption: "Caption two" },
    { src: img3, caption: "Caption three" },
    { src: img4, caption: "Caption four" },
    { src: img5, caption: "Caption five" },
    { src: img6, caption: "Caption six" },
    { src: img7, caption: "Caption seven" },
    { src: img8, caption: "Caption eight" },
    { src: img9, caption: "Caption nine" },
    { src: img10, caption: "Caption ten" }
  ];

function Ratcat() {
  return (
    <>
    <div className='uwu'>
      <h1 className='title'>Rats & Cats</h1>
      <br></br>
      <Slideshow
          input={collection}
          ratio={`5:3`}
          mode={`automatic`}
          timeout={`3000`}
        />
      <br></br>
      {/* <img src="https://cdn.7tv.app/emote/640e3418d7b4e2c3a0141245/4x.webp" alt="Meowa"></img> */}
      
    </div>
    </>
  )
}

export default Ratcat