import { faArrowRight, faBalanceScale, faMoneyBill, faPen, faUpload } from '@fortawesome/free-solid-svg-icons';
import Cards from './Cards.jsx';
import './SecondPart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function SecondPart() {
    return (
        <>
            <div className="second-part">
                <p className='heading2' id='how-it-works'>How it works?</p>
                <p className='description2'>Sell your unused software licenses in just three steps with Softshell.</p>
                <div className="second-part-main">
                    <Cards text="Upload License" icon={faUpload}/>
                    <FontAwesomeIcon icon={faArrowRight} className='arrow-right' />
                    <Cards text="Get Valuation" icon={faBalanceScale}/>
                    <FontAwesomeIcon icon={faArrowRight} className='arrow-right' />
                    <Cards text="Get Paid" icon={faMoneyBill}/>
                </div>
            </div>
        </>
    );
}
export default SecondPart