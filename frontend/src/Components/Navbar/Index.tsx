import { ReactComponent as Simbol } from 'assets/img/pirata.svg';
import './styles.css';

function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://piratelol.ytmnd.com" target="_blank" rel="noreferrer">
                        <div className="dsmovie-contact-container">
                            <Simbol />
                            <p className="dsmovie-contact-link">You are a pirate?</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;