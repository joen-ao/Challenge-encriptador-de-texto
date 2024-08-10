import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import styles from './Aboutme.module.css'

const About = () => {
   return(
    <div className={styles.aboutContainer}>
        <Navbar/>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui nobis repellat vel temporibus, similique repudiandae pariatur corrupti harum tempora numquam dignissimos, itaque, quasi sint iste. Minus nulla dolorum doloremque tempora.</p>
        <Footer/>
    </div>
   ) 
}

export default About;