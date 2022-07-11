import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (
        <header>
            <div className="DSMeta-logo-container">
                <img src={logo} alt="DSMeta"/>
                    <h1>DSMeta</h1>
                    <p>Desenvolvido por:
                        <a href="mailto: gabriell.2019@alunos.utfpr.edu.br">@gabrielMolina</a>
                    </p>
            </div>
        </header>
    )
}

export default Header
