import './style.css'
import { Link } from 'react-router-dom'



function About(){
    return(
        <>
            <h1> React Sobre </h1>
            <Link to='/'>
                <button type="button"> Home </button>
            </Link>
        </>
    )
}

export default About