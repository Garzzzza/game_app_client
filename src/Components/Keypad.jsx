import React, { useState } from 'react';

const lettersData = {
  "letters": [
    {"key": "a"},
    {"key": "b"},
    {"key": "c"},
    {"key": "d"},
    {"key": "e"},
    {"key": "f"},
    {"key": "g"},
    {"key": "h"},
    {"key": "i"},
    {"key": "j"},
    {"key": "k"},
    {"key": "l"},
    {"key": "m"},
    {"key": "n"},
    {"key": "o"},
    {"key": "p"},
    {"key": "q"},
    {"key": "r"},
    {"key": "s"},
    {"key": "t"},
    {"key": "u"},
    {"key": "v"},
    {"key": "w"},
    {"key": "x"},
    {"key": "y"},
    {"key": "z"}
  ]
};

export default function Keypad({ usedKeys }) {
  const [letters, setLetters] = useState(lettersData.letters);

  return (
    <div className="keypad">
        {letters && letters.map(l => {
          const color = usedKeys[l.key]
          return (
            <div key={l.key} className={color}>{l.key}</div>
          )
        })}
      </div>
  );
}


// export default function Keypad({ usedKeys }) {
//     const [letters, setLetters] = useState(null)
  
//     useEffect(() => {
//       fetch('http://localhost:3001/letters')
//         .then(res => res.json())
//         .then(json => {
//           setLetters(json)
//         })
//     }, [])
  
//     return (
//       <div className="keypad">
//         {letters && letters.map(l => {
//           const color = usedKeys[l.key]
//           return (
//             <div key={l.key} className={color}>{l.key}</div>
//           )
//         })}
//       </div>
//     )
//   }