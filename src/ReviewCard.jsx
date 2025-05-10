import './ReviewCard.css';

function ReviewCard(props){
    return(
        <>
            <div className="card-container">
                <img src={props.image} alt="client-image" className='customer-image' />
                <p className="review">{props.review}</p>
                <p className="name">{props.name}</p>
                <p className="info">-{props.info}</p>
            </div>
        </>
    );
}

export default ReviewCard;