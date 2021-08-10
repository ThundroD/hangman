import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetter from './components/WrongLetter';
import Word from './components/Word';
import Notification from './components/Notification';
import Message from './components/Message';
import { dispalyNotification, checkWin } from './functions/functions';

import './App.css';

//array of potential words
const words = ['Olympics', 'pentathlon', 'velodrome', 'weightlifting', 'dressage',
'sportsmanship', 'medal', 'athlete', 'badminton', 'fencer', 'handball', 'sport', 'decathlon',
'gymnastics', 'volleyball', 'archery', 'equestrian', 'hippodrome', 'polo', 'cycling', 'softball',
'basketball', 'sking', 'snowboarding', 'skateboarding', 'skating', 'award', 'gold', 'silver', 'bronze',
'tennis', 'Greece', 'swimming', 'freestyle', 'breaststroke', 'butterfly', 'flame', 'wrestling', 'relay',
'hockey', 'race', 'fencing', 'qualifier', 'lift'];

//selected word randomized
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  {/*Set states */}
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);


  useEffect (() => {
    const keydownHandler = event => {
      const { key, keyCode} = event;
      /*if keycode is greater or equal to 65 and less than or equal to 90
      make letter entered lower case*/
        if (playable && keyCode >= 65 && keyCode <= 90) {
          const letter = key.toLowerCase();
          /*check to see if selected word includes the letter inputed*/
          if (selectedWord.includes(letter)) {
            /* if it is not included, then we add to our letters*/
            if (!correctLetters.includes(letter)) {
              setCorrectLetters(currentLetters => [ ...currentLetters, letter])
              //if it is already in our letters show notification that it's already been guessed
            } else {
              dispalyNotification(setShowNotification);
            }
          } else {
            /*check to see if selected word includes the letter inputed*/
            if (!wrongLetters.includes(letter)) {
              //* if it is not included, then we add to our wrong letters*/
              setWrongLetters(wrongLetters => [ ...wrongLetters, letter])
              //if it is already in our letters show notification that it's already been guessed
            } else {
              dispalyNotification(setShowNotification);
            }
          }
        }
      }
      //add event listener
      window.addEventListener('keydown', keydownHandler);

      //clean up event listener by removing it to only have one running at a time
      return () => window.removeEventListener('keydown', keydownHandler);
      
      //funciton is called only when correct letters, wrong letters and playable
    }, [correctLetters, wrongLetters, playable]);

    function playAgain(){
      setPlayable(true);

      //create empty arrays
      setCorrectLetters([]);
      setWrongLetters([]);

      //get new word
      const random = Math.floor(Math.random() * words.length);
      selectedWord = words[random];
    }

  return (
    <>
    <Header></Header>
    <div className="game-container">
      {/* Figure with props wrong letters*/}
      <Figure wrongLetters={wrongLetters}></Figure>
      {/* wrong letters with props wrong letters*/}
      <WrongLetter wrongLetters={wrongLetters}></WrongLetter>
      {/* word with props selectedword and correct letters*/}
      <Word selectedWord={selectedWord}
      correctLetters={correctLetters}
      ></Word>
    </div>
    {/* message with props*/}
    <Message correctLetters= {correctLetters}
    wrongLetters={wrongLetters}
    selectedWord={selectedWord}
    setPlayable={setPlayable}
    playAgain={playAgain}></Message>
    {/* notification with props*/}
    <Notification dispalyNotification={showNotification}></Notification>
    </>
  );
}

export default App;
