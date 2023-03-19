import React from "react"


function App() {
  const [drumText,setDrumText] = React.useState("");

  const drumPads = [
    {id:"Q",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",text:"Heater 1"},
    {id:"W",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",text:"Heater 2"},
    {id:"E",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",text:"Heater 3"},
    {id:"A",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",text:"Heater 4"},
    {id:"S",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",text:"Clap"},
    {id:"D",src:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",text:"Open-HH"},
    {id:"Z",src:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",text:"Kick-n'-hat"},
    {id:"X",src:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",text:"Kick"},
    {id:"C",src:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",text:"Closed-HH"}
  ]

  const handlePadClick = (pad) => {
    const audio = document.getElementById(pad.id);
    audio.currentTime = 0;
    audio.play();
    setDrumText(pad.text);
  };

  const handleKeyDown = (event) => {
    const pad = drumPads.find((p) => p.id === event.key.toUpperCase());
    if (pad) {
      handlePadClick(pad);
      event.preventDefault();
    }
  };

  const drumms = drumPads.map(drum =>{
    return (
      <div className="drum-pad" key={drum.id} id={drum.text} onClick={() => handlePadClick(drum)}>
        <audio src={drum.src} className="clip" id={drum.id}></audio>
        {drum.id}</div>
    )
  })

  return (
    <div className="app" onKeyDown={handleKeyDown} tabIndex={-1}>
      <h1>Drummings</h1>
      <div className="drum-machine" id="drum-machine">
        <p className="display" id="display">{drumText}</p>
        <div id="drums" className="drums">{drumms}</div>
      </div>
      <p>by <a href="https://github.com/Qnkisa" target={"_blank"}>Yanislav Angelov</a></p>
    </div>
  )
}

export default App
