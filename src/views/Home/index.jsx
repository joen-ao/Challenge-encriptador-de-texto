import { Form } from 'react-router-dom';
import styles from './Home.module.css';
import { useForm } from "react-hook-form";

const Home = () => {
    return(
        <div className={styles.containerHome}>
            <div className={styles.containerText}>
                <form>
                    
                        
                        <input placeholder='Ingrese el texto aqui'></input>
                    
                    <div>
                        <button>Encriptar</button>
                        <button>Desencriptar</button>
                    </div>
                </form>
            </div>

            <div className={styles.containerResult}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas modi odio saepe atque dolor pariatur. Aperiam consequatur accusantium veritatis atque praesentium facere placeat sit corporis earum ea laudantium, quod dolor.</p>
            </div>

        </div>
    )
}

export default Home;