import { useState } from 'react';
import './SnowFlake.css';

function SnowFlake(){
  var snow = true;

  const [buttonText, setButtonText] = useState("Disable Snow"); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState

  const changeText = (text) => setButtonText(text);

  const removeElement = () => {
    if(!snow){
      snow = true;
      changeText("Disable Snow")
      document.getElementById("snoww").style.display = "inline";
    }
    else{
      snow = false;
      changeText("Enable Snow")
      document.getElementById("snoww").style.display = "none";
    }
  };
    return (<section>
        <div id="snoww" className="snowflakes" aria-hidden="true">
  <div className="snowflake">
  ❅
  </div>
  <div className="snowflake">
  ❆
  </div>
  <div className="snowflake">
  ❅
  </div>
  <div className="snowflake">
  ❆
  </div>
  <div className="snowflake">
  ❅
  </div>
  <div className="snowflake">
  ❆
  </div>
  <div className="snowflake">
    ❅
  </div>
  <div className="snowflake">
    ❆
  </div>
  <div className="snowflake">
    ❅
  </div>
  <div className="snowflake">
    ❆
  </div>
  <div className="snowflake">
    ❅
  </div>
  <div className="snowflake">
    ❆
  </div>
  
</div>
<div>
      { (
        <button className="removeSnow" onClick={removeElement}>{buttonText}</button>
      )}
    </div>
    </section>
    )
    
}
export default SnowFlake;