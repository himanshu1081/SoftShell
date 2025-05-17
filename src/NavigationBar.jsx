import { RiHeartFill, RiSidebarFoldLine } from "@remixicon/react";
import './NavigationBar.css';
import './Form.css';
import { useState } from 'react';
import logo from './assets/react.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavigationBar() {
  const [showModal, setShowModal] = useState(false);
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
          <li className='option'><a href="#why-choose-us">About Us</a></li>
          <li className='option'><a href="#">Contact Us</a></li>
        </ol>
        <div className="button">
          <button className='login'>Log in</button>
          <button className='sell' onClick={() => setShowModal(true)}>Sell</button>
          <RiSidebarFoldLine size={30} className="sidebar-logo"/>
        </div>
      </nav>
      {showModal && (<div className='overlay' onClick={() => setShowModal(false)}></div>)}
      {showModal && (<div className="form-container">
        <h2 style={{color:'black'}}>Complete the Form</h2>
        <form className='form'>
          <input type="text" name="name" placeholder="Your Name" className='input' required />
          <input type="email" name="email" placeholder="Your Email" required className='input' />
          <input type="text" name="company" placeholder="Company" className='input' />
          <select name='license' className='input'>
            <option value="">Select License Type</option>
            <option value="free">Free</option>
            <option value="pro">Pro</option>
            <option value="enterprise">Enterprise</option>
            <option value="trial">Trial</option>
          </select>
          <textarea style={{ maxWidth: 465,height:200}} name="message" className='input' placeholder="Your Message" rows="4"></textarea>
          <div className="button-container">
            <button className='button-cancel' onClick={() => setShowModal(false)}>Cancel</button>
            <button type="submit" className="button-send">Send</button>
          </div>
        </form>
      </div>)}
    </>
  );
}

export default NavigationBar;