import './NavigationBar.css';
import logo from './assets/react.svg';

function NavigationBar() {
  return (
    <>
      <nav className='container'>
        <div className='logo-container'>
          <img className='logo image' alt='logo' src={logo}></img>
          <p className='logo name'>SOFTSHELL</p>
        </div>
        <ol className='navbar'>
          <li className='option'><a href="#">How it works</a></li>
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