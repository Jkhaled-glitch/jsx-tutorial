import React from 'react';
import './App.css';

const displayEmojiName = event => alert(event.target.id);
const displayAction = true;
const emojis = [
  {
    emoji: "😀",
    name: "grinning face"
  },
  {
    emoji: "🎉",
    name: "party popper"
  },
  {
    emoji: "💃",
    name: "woman dancing"
  }
];

function App() {
return(
  <div className='container'>
     <h1>Hello, World</h1>
      {displayAction && <p>I am writing JSX</p>}
      <ul>
        {emojis.map(element=>
         <li key={element.name}>
            <button
              onClick={displayEmojiName}
            >
                 <span role="img" aria-label={element.name} id={element.name}>{element.emoji}</span>
          </button>
         </li>
       )
        }
      </ul>
  </div>
)
}

export default App;