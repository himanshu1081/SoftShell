import { faPen, faUpload } from '@fortawesome/free-solid-svg-icons';
import './Cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function cards(props) {
    return (
        <>
        <div className="box">
            <FontAwesomeIcon icon={props.icon}/>
            <p className="box-text">{props.text}</p>
        </div>
        </>
    );
}
export default cards