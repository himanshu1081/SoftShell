import './FourthPart.css';
import ReviewCard from './ReviewCard.jsx';
import Ananya from './assets/ananya.jpeg'
import Sarah from './assets/sarah.jpeg'
import Daniel from './assets/daniel.jpeg'

function FourthPart(){
    return(
            <>
                <div className='fourth-part'>
                    <div className="fourth-part-main">
                        <p className="heading4">Customer Reviews</p>
                        <div className="customer-list">
                            <ReviewCard image={Ananya} review="SoftSell made it incredibly easy to resell our unused software licenses. The process was smooth, and we got paid faster than expected!" name="Ananya Mehta" info="IT Manager, Corebyte Solutions"/>
                            <ReviewCard image={Daniel} review="Excellent service with transparent valuations. We recovered value from old licenses we thought were worthless. Highly recommended!" name="Daniel Becker" info="Procurement Lead, NexaTech GmbH"/>
                            <ReviewCard image={Sarah} review="We love how easy and straightforward SoftSell’s process is. They delivered exactly what they promised!" name="Sarah Lewis" info="Operations Head, TechWave Ltd."/>
                        </div>
                            
                    </div>
                </div>
            </>
    );
}

export default FourthPart;