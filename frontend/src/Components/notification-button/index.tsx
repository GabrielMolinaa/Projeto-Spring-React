import icon from '../../assets/img/notification-icon.svg';
import './styles.css';

function NotificationButton() {
    return (
        
        <div className="DSMeta-redButton">
            <img src={icon} alt="notify"/>
        </div>
        
    )
}

export default NotificationButton;