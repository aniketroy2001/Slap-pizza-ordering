import styles from "../styles/Aboutus.module.css";
import Image from "next/image";

const Aboutus = () => {
    return (
        <div className={styles.container} >
            <h1 className={styles.title}>ABOUT US</h1>
            <p className={styles.desc}>
                We are students of VJTI college and have made this Pizza ordering website as a part of our Final Year Project
            </p>
            <div className={styles.wrapper}>
                <Image src="/img/Aniket.jpg" alt="" width="200" height="280" />
                
                <Image src="/img/lishika.jpg" alt="" width="200" height="280" />
                
                <Image src="/img/pradnya.jpeg" alt="" width="200" height="280" />
                
                <Image src="/img/shantanu.jpeg" alt="" width="200" height="280" />
                
                
            </div>
        </div>
    );
};

export default Aboutus;