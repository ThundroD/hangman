import React, { useEffect } from 'react';
import { checkWin } from '../functions/functions';

const Message = ({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain }) => {
    //create messages with empty strings and set playble
    let finalMessage = '';
    let finalMessageRevealWord = '';
    let playable = true;
    //if win
   if( checkWin(correctLetters, wrongLetters, selectedWord) === 'win' ) {
    finalMessage = 'Congrats! You won linguistic gold! 🥇';
    playable = false;
    //if lose
  } else if( checkWin(correctLetters, wrongLetters, selectedWord) === 'lose' ) {
    finalMessage = 'Sorry you lost. 😱 Better luck next time';
    finalMessageRevealWord = `The word was: ${selectedWord}`;
    playable = false;
  } 
  //effect to set playable
  useEffect(() => {
    setPlayable(playable);
  });

    return (
        //if there is a final message display flex if not leave bland and dispaly rest
        <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
            <div className="popup">
            <h2>{finalMessage}</h2>
            <h3>{finalMessageRevealWord}</h3>
            <button onClick={playAgain}>Play Again</button>
            </div>
      </div>
    )
}

export default Message
