import React from 'react'

const Word = ({ selectedWord, correctLetters }) => {
    return (
        <div className="word">
            {/* Mapping through and finding if the letter is in the correct letter array if
            it is display the letter in the span if not give blank*/ }
            {selectedWord.split('').map( (letter, i) => {
                return (
                <span className="letter" key={i}>
                    {correctLetters.includes(letter) ? letter : ''}
                </span>
                )
            })}
        </div>
    )
}

export default Word
