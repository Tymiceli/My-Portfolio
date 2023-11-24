import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/T.svg';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useState, useEffect } from 'react';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['y', 'l', 'e', 'r']
    const jobArray = ['-', 's', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    },[])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i</span>
                <span className={`${letterClass} _13`}>,</span>
                <br />
                <span className={`${letterClass} _14`}>I</span>
                <span className={`${letterClass} _15`}>'</span>
                <span className={`${letterClass} _16`}>m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray} 
                idx = {12}/>
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22}/>
                </h1>
                <h2>Full Stack / Java Instructor</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        <Loader type="pacman" />
        </>
    );
}

export default Home