import React,{useState} from 'react';
import './App.css';

function App() {
  
  const GIFS=['https://media1.giphy.com/media/nVsLCrW5iHf6E/giphy.webp?cid=ecf05e47qmexj7k34qfgu6i2skjb34kbwortc1ovmuvyppzd&rid=giphy.webp&ct=g'
  ,'https://media4.giphy.com/media/26ybvMeJmCaPtcNDW/200w.webp?cid=ecf05e47qmexj7k34qfgu6i2skjb34kbwortc1ovmuvyppzd&rid=200w.webp&ct=g'
  ]
  const [gifs,setGifs]= useState(GIFS)
    return (
    <div className="App">
      <section className="App-content">
      {
      gifs.map(
          singleGif=>
            <img src={singleGif} alt=""/>
        )
      }
      </section>
    </div>
  );
}

export default App;
