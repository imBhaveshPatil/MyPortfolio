import React, { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faReact, faGit } from '@fortawesome/free-brands-svg-icons'
import Csharp from '../../assets/images/hashtag.png'
import Next from '../../assets/images/nextjs.svg'
import NET from '../../assets/images/social.png'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArr={['A', 'b', 'o', 'u', 't', '', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious Full-Stack developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            When I'm not coding, you can find me exploring the latest tech
            innovations, brainstorming new ideas to build and innovate. Let's
            create something amazing together!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <img
                src={Csharp}
                alt="C# Icon"
                style={{ width: '150px', height: '150px', color: '#178600' }}
              />{' '}
              {/* C# Green */}
            </div>
            <div className="face3">
              <FontAwesomeIcon
                icon={faDatabase}
                size="2x"
                style={{ color: '#00758F' }}
              />{' '}
              {/* SQL Blue */}
            </div>
            <div className="face4">
              <img
                src={Next}
                alt="Next js"
                style={{ width: '150px', height: '150px' }}
              />{' '}
              {/* Next.js Black */}
            </div>

            <div className="face5">
              <img
                src={NET}
                alt=".Net"
                style={{ width: '150px', height: '150px' }}
              />{' '}
              {/* .NET Purple */}
            </div>
            <div className="face6">
              <FontAwesomeIcon
                icon={faGit}
                size="2x"
                style={{ color: '#F15029' }}
              />{' '}
            </div>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default About
