import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJava, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am on the lookout for new opportunities that challenge and inspire me to grow
                        in my career. My passion for software development goes hand in hand with my
                        insatiable curiosity. I thrive on unraveling complex problems and exploring
                        innovative solutions.
                    </p>
                    <p>
                        I approach every project with an outgoing and positive mindset, fostering
                        collaboration and creating a dynamic work environment.
                        I consider myself highly coachable, always seeking ways to enhance my skills
                        and embrace new technologies. I believe that adaptability is key in the
                        ever-evolving field of software development.
                    </p>
                    <p>
                        In one sentence, I am driven, focused, curious, passionate, confident, and open to
                        learning from any and everyone.
                    </p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faJava} color="#FFF" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color="#FFA500" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    )
}

export default About