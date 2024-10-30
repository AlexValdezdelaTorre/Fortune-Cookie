import { useState } from 'react'
import {img1, img2, img3, img4} from './assets/images'
import phrases from './phrases.json'
import './App.css'



const images = [img1, img2, img3, img4]

function radomIndex (max) {
  return Math.floor(Math.random() * max)

}
function App() {
  const [phrase, setPhrase] = useState(phrases[radomIndex(phrases.length)])
  const [img, setImg] = useState(images[radomIndex(images.length)])

  function changePhrase () {
    setPhrase(phrases[radomIndex(phrases.length)])
    setImg(images[radomIndex(images.length)])
  }
  

 return (
    <div className='wrapper' style={{backgroundImage: `url('${img}')`}}>
      <div className='container'>
        <h1 className='heading'>Fortune Cookie</h1>
        <div className='card'>
          <div className='card_body'>
           <q className='phrase'>{phrase.phrase}</q>
           <cite className='author'>-{phrase.author}</cite>

          </div>
        </div> 
        <button onClick={changePhrase} className='btn'>Ver otro</button>
        </div>
    </div>
    
  )
}

export default App
