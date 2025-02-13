import './index.scss'

import React from 'react'

const AnimatedLetters = ({ letterClass, strArr, idx }) => {
  return (
    <span>
      {strArr.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
