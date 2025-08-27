import './style.css'

function Form(){
    return(
        <>
        <section class="last">
            <h2>Formulário Simples</h2>
            <form>

                <div>
                    <label for="nome">Nome:</label>
                    <input type="text" name="nome" id="nome" required/>
                </div>

                <div>
                    <label for="email">Email:</label>
                    <input type="email" name="email" id="email" required/>
                </div>

                <div>
                    <label for="mensagem">Mensagem:</label>
                    <textarea name="mensagem" id="mensagem" required></textarea>
                </div>

                <div>
                    <label for="idade">Idade:</label>
                    <input type="number" name="idade" id="idade" min="18" max="100" required/>
                </div>

                <div>
                    <label for="cor">Cor:</label>
                    <input type="color" name="cor" id="cor" required/>
                </div>

                <div>
                    <label for="anexo">Anexo:</label>
                    <input type="file" name="anexo" id="anexo"/>
                </div>
                <button type="submit">Enviar</button>
                <button id="buttonJS">Exemplo JS</button>
            </form>
        </section>
        </>
    )
}

export default Form