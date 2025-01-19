import React, { useEffect, useState } from 'react'
import './index.scss'
import LogoT from '../../assets/images/xp.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArr = ['B', 'h', 'a', 'v', 'e', 's', 'h']
  const jobArr = [
    'F',
    'u',
    'l',
    'l',
    ' ',
    'S',
    't',
    'a',
    'c',
    'k',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            {/* <img src={LogoT} alt="developer" /> */}
            <span>&nbsp;</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArr={nameArr}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArr={jobArr}
              idx={22}
            />
          </h1>
          <h2>Software Developer / DotNet C#</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>

      <Loader type='pacman' />
    </>
  )
}

export default Home
