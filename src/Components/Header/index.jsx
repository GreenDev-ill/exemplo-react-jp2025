import './style.css'

function Header({titulo}){
    return(
        <>
            <header>
                <h1> {titulo ? titulo : 'não passou algo'}</h1>
            </header>
        </>
    )
}

export default Header