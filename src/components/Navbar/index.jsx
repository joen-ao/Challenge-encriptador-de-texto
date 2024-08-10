import styles from './Navbar.module.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
      };
      const handleAboutClick = () => {
        navigate('/about');
      };

    return(
        <div className={styles.navbarContainer}>
            <p onClick={handleHomeClick} className={styles.homeTitle}>Home</p>
            <p onClick={handleAboutClick} className={styles.aboutTitle}>About me</p>
        </div>
    )
}

export default Navbar;