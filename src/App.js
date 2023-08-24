import React from "react";
import { useState } from 'react';
import campfireUnlit from './Campfire_48x48_Unlit.png';
import campfireLit from './campfire_48x48.gif';

// const camp = document.getElementById("camp");
// const campButton = document.getElementById("campButton");

// campButton.addEventListener("click", function () {
//   camp.src = "img/campfire_48x48.gif";
// });

function App(){
  return (
    <React.Fragment>
      <h1 className="title">Trevor Hunter</h1>
      <img id="camp" src="./Campfire_48x48_Unlit.png"></img>
      <button id="campButton">Start Fire</button>
      <Campfire  />
      <hr/>
    </React.Fragment>
  );
}


function Campfire() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

// const imagesPath = {
//   unlit: "./Campfire_48x48_Unlit.png",
//   lit: "./campfire_48x48.gif"
// }

// class App extends React.Component {
//   state = {
//     open: true
//   }
//   toggleImage = () => {
//     this.setState(state => ({ open: !state.open}))
//   }

//   getImageName = () => this.state.open ? 'unlit' : 'lit'

//   render() {
//     const imageName = this.getImageName();
//     return(
//       <div>
//         <img style={{maxWidth: '50px'}} src={imagesPath[imageName]} onClick={this.toggleImage} />
//       </div>
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

export default App;