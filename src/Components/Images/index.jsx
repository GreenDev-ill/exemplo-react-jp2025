import './style.css'

function Images(){
    return(
        <>
        <section>
            <h2>Imagens e Videos</h2>
            
            <h3>Imagem</h3>
            <figure>
                <img src="https://img.freepik.com/fotos-premium/um-cachorro-na-praia-ao-por-do-sol_865967-24680.jpg" alt="image de um cachorro na praia" title="cachorro fudido" width="300" height="200"/>
            </figure>

            <h3>Video</h3>
            <iframe width="400" height="200" src="https://www.youtube.com/embed/_RntONLBl0c?si=edF5QPpobj8CTex6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section>
        </>
    )
}

export default Images