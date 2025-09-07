import './style.css'

import { Link } from 'react-router-dom'


function Home(){
    return(
        <>
            <main>
                <h1>React Home</h1>
                <Link to='/about'>
                    <button type="button"> About </button>
                </Link>
            </main>
        </>
    )
}

export default Home