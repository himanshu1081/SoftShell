import './NavigationBar.css';
import logo from './assets/react.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavigationBar() {
  return (
    <>
      <nav className='container'>
        <div className='logo-container'>
          <FontAwesomeIcon icon="fa-brands fa-hive image " />
          <p className='logo name'>SOFTSHELL</p>
        </div>
        <ol className='navbar'>
          <li className='option'><a href="#how-it-works">How it works</a></li>
          <li className='option'><a href="#">Library</a></li>
          <li className='option'><a href="#">About Us</a></li>
          <li className='option'><a href="#">Contact Us</a></li>
        </ol>
        <div className="button">
          <button className='login'>Log in</button>
          <button className='sell'>Sell</button>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar;