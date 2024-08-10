import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import styles from './Aboutme.module.css'

const About = () => {
   return(
    <div className={styles.aboutContainer}>
        <Navbar/>
        <div className={styles.containerText}>
            <p className={styles.title}>Potencia tus proyectos con un Front-end eficiente y creativo.</p>
            <p className={styles.description}>Eleve tu negocio digital a otro nivel con un Front-end de calidad!
            ¡Hola! Soy Joen Anaya, desarrollador Front-end especializado en React, HTML, CSS y JavaScript. Me apasiona convertir ideas en realidades digitales y apoyar a emprendedores y diseñadores a crear experiencias web impactantes. ¿Conectamos?
            </p>
        
            <div className={styles.containerEnlaces}>
                <h2 className={styles.enlacesTitle}>Accede a mis redes</h2>
                <a className={styles.enlacesLink} href="https://github.com/joen-ao/">
                    <img src='/src/assets/github.png' className={styles.imgButton} />
                            Github
                </a>
                <a className={styles.enlacesLink}  href="https://linkedin.com/in/joen-anaya">
                    <img src='/src/assets/linkedin.png' className={styles.imgButton} />
                            Linkedin
                </a>
            </div>
        
        </div>
        

        <img src='/src/assets/fb.jpg' alt='Foto de presentacion' className={styles.imgPresentacion}/>
        
        <Footer/>
    </div>
   ) 
}

export default About;