import { useState } from 'react';
import styles from './Home.module.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MatrixRainingCode from '../../components/MatrizRaining/MatrizRainingEfect';

const Home = () => {
    const [text, setText] = useState('');
    const [result, setResult] = useState('');

    // Función para encriptar
    const encryptText = (text) => {
        return text
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
    };

    // Función para desencriptar
    const decryptText = (text) => {
        return text
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    };

    // Manejar el click en el botón Encriptar
    const handleEncrypt = (e) => {
        e.preventDefault();
        setResult(encryptText(text));
    };

    // Manejar el click en el botón Desencriptar
    const handleDecrypt = (e) => {
        e.preventDefault();
        setResult(decryptText(text));
    };

    // Manejar el cambio en el input con validación
    const handleChange = (e) => {
        let inputText = e.target.value;

        // Remover mayúsculas y acentos
        inputText = inputText
            .toLowerCase() // Convierte a minúsculas
            .normalize('NFD') // Normaliza caracteres con acentos
            .replace(/[\u0300-\u036f]/g, ''); // Elimina los acentos

        // Filtrar caracteres no permitidos (solo letras minúsculas)
        inputText = inputText.replace(/[^a-z\s]/g, '');

        setText(inputText);
    };

    // Copiar el resultado al portapapeles
    const handleCopy = () => {
        navigator.clipboard.writeText(result);
    };

    return (
        <div className={styles.containerHome}>
            <Navbar />
            <div className={styles.backgroundContainer}>
                <MatrixRainingCode />
            </div>
            <div className={styles.containerText}>
                <input 
                    className={styles.input} 
                    placeholder="Ingrese el texto aquí"
                    value={text}
                    onChange={handleChange}
                />
                <p className={styles.aviso}>
                    <img src='https://i.postimg.cc/qR0BgvSJ/exclamacion.png' className={styles.imgExclamacion} alt='exclamacion'/>
                    Solo letras minúsculas y sin acento
                </p>
                <div className={styles.containerButton}>
                    <button onClick={handleEncrypt} className={styles.buttonEncriptar}>Encriptar</button>
                    <button onClick={handleDecrypt} className={styles.buttonDescencriptar}>Desencriptar</button>
                </div>
            </div>

            <div className={styles.containerResult}>
                {result ? (
                    <>
                        <p className={styles.result}>{result}</p>
                        <button onClick={handleCopy} className={styles.copyButton}>
                            Copiar
                        </button>
                    </>
                ) : (
                    <div>
                        <p className={styles.noMessageTitle}>Ningún mensaje fue encontrado</p>
                        <p className={styles.noMessage}>Ingrese el texto que desea encriptar o desencriptar</p>
                    </div>
                )}
            </div>
           
            <Footer />
        </div>
    );
};

export default Home;
