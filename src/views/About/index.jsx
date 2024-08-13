import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import styles from './Aboutme.module.css'
import MatrixRainingCode from '../../components/MatrizRaining/MatrizRainingEfect';

const About = () => {
   return(
    <div className={styles.aboutContainer}>
        <Navbar/>
        <div className={styles.backgroundContainer}>
            <MatrixRainingCode className={styles.matrizRaining}></MatrixRainingCode>
        </div>
        <div className={styles.containerText}>
            <p className={styles.title}>Potencia tus proyectos con un Front-end eficiente y creativo.</p>
            <p className={styles.description}>Eleve tu negocio digital a otro nivel con un Front-end de calidad!
            ¡Hola! Soy Joen Anaya, desarrollador Front-end especializado en React, HTML, CSS y JavaScript. Me apasiona convertir ideas en realidades digitales y apoyar a emprendedores y diseñadores a crear experiencias web impactantes. ¿Conectamos?
            </p>
        
            <div className={styles.containerEnlaces}>
                <h2 className={styles.enlacesTitle}>Accede a mis redes</h2>
                <a className={styles.enlacesLink} href="https://github.com/joen-ao/">
                <img src="https://i.postimg.cc/0M0DsWHT/github.png" className={styles.imgButton} alt="github"/>
                            Github
                            
                </a>
                <a className={styles.enlacesLink}  href="https://linkedin.com/in/joen-anaya">
                <img src="https://i.postimg.cc/Twh7VrZC/linkedin.png" className={styles.imgButton} alt="linkedin"/>
                            Linkedin
                </a>
            </div>
        
        </div>
        

       <img src="https://i.postimg.cc/3R6Lnkh7/fb.jpg" className={styles.imgPresentacion} alt="fb"/>
        
        <Footer/>
    </div>
   ) 
}

export default About;