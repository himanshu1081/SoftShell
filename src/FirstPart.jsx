import './FirstPart.css';
import NavigationBar from './NavigationBar.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import girl from './assets/girl.png';
import './assets/fonts/Akira.otf';
function FirstPart() {
    return (
        <>
            <div className='container-hero-section'>
                <NavigationBar />
                <div className="main-content">
                    <div className='first-content'>
                        <p className='heading'>
                            License
                        </p>
                        <img className='girl-image' src={girl} alt='girl'></img>
                    </div>

                    <div className="search">
                        <FontAwesomeIcon icon={faSearch} className='search-icon' />
                        <input className='search-license' type='search' placeholder='Search for your license...'></input>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} className='search-enter-button' />
                    </div>
                    <div className="types">
                        <p className='type-text'>Popular License:</p>
                        <ol className='types-list'>
                            <li>Microsoft</li>
                            <li>Adobe</li>
                            <li>Oracle</li>
                            <li>Apple</li>
                        </ol>
                    </div>
                    <p className='description'>SoftShell empowers individuals and businesses by reselling genuine software licenses at competitive prices.</p>
                </div>
            </div>
        </>
    );
}

export default FirstPart;