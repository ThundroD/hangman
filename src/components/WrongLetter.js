import React from 'react'

//add wrong letters
const WrongLetter = ({wrongLetters}) => {
    return (
        <div className="wrong-letters-container">
        <div>
          {wrongLetters.length > 0 && 
            <p>Wrong</p>
          }
          {wrongLetters
            .map((letter, i) => <span key={i}>{letter}</span>)
            /* if there is nothing there giv current but if there give the prevous letter and
            add a comma, then add in the current*/
            .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)}
        </div>
      </div>
    )
}

export default WrongLetter
