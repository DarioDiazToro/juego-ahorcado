import { useEffect, useState } from 'react';
import { letters } from './helpers/letters';
import { HangImage } from './components/HangImage';
import './App.css';
import { getRandomWord } from './helpers/getRandomWord';


function App() {

 const [word] = useState(getRandomWord());
 const [hiddenWord,setHiddenWord] =  useState('_ '.repeat(word.length));
 const [attemps,setAttemps] =  useState(0);
 const [lose, setLose]  = useState(false);
 const [won, setWon]  = useState(false);



 //Determinar si la persona perdio
 useEffect(()=>{
  if(attemps>=9){
   setLose(true);
  }
 },[attemps]);

//  Determinar si la persona gano
 useEffect(()=>{
  const currentHiddenWord = hiddenWord.split(" ").join("");

  if(currentHiddenWord === word){
    setWon(true);
  }
 },[hiddenWord])



 const checkLetter =(letter:string)=>{

    if(won) return;

    if(!word.includes(letter) && !lose){
      setAttemps( Math.min(attemps + 1 ,9));
      return;
    }
    const hiddenWordArray = hiddenWord.split(" ");

     for(let i = 0; i<hiddenWordArray.length;i++){
      if(letter === word[i]){
        hiddenWordArray[i] = word[i];
      }
     }

    setHiddenWord(hiddenWordArray.join(" "));
 };

 const newGame = ()=>{
  const newWord = getRandomWord();
  setHiddenWord("_ ".repeat(newWord.length));
  
  setAttemps(0);
  setLose(false);
  setWon(false);
 };
  return (
    <div className='App'>

      {/* Imagenes */}
       <HangImage  imageNumber={attemps}/>

      {/* Palabra Oculta */}
      <h3>{hiddenWord}</h3>

      {/* Contador de intentos */}
      <h3>Intentos: {attemps}</h3>

      {/* Mensaje si la persona perdio */}

      {
        (lose)? <h2>Lo siento Perdiste <br /> {word}</h2>
        : " "
        
      }

      {/* Mensaje si la persona Gano! */}

      {
        (won)? <h2>Felicidades, Usted Gano! </h2>
        : " "
      }

      {/* Botones de letras */}
         {
        letters.map((letter)=>(
          <button onClick={()=>checkLetter(letter)}
          key={letter}>
            {letter}
            </button>
        ))
         }
         <br /><br />
         <button onClick={newGame} id='btnNewGame'>¿Nuevo Juego?</button>
  </div>
  )
}
export default App;
