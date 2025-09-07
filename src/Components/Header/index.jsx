import { Link } from 'react-router-dom'
import './style.css'

function Header({titulo}){
    return(
        <>
        <header>
            <h1> Header React </h1>
            <nav>
                <ul>
                    <Link to='/'>
                        <button type="button">Home</button>
                    </Link>
                    <Link to='/about'>
                        <button type ="button">Sobre</button>
                    </Link>
                </ul>
            </nav>
                {/* <h1> {titulo ? titulo : 'não passou algo'}</h1> */}
        </header>
        </>
    )
}

export default Header