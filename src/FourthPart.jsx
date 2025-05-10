import './FourthPart.css';
import Reviews from './Reviews.jsx';
function FourthPart(){
    return(
            <>
                <div className='fourth-part'>
                    <div className="fourth-part-main">
                        <p className="heading4">Customer Reviews</p>
                            <Reviews/>
                    </div>
                </div>
            </>
    );
}

export default FourthPart;