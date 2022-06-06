import styles from "../styles/SupplyChain.module.css";
import Image from "next/image";

const SupplyChain = () => {
    return (
        <div id="SupplyChain" className={styles.container} >
                <div className={styles.card}> 
                    <h1 className={styles.motto}>
                        QR CODE FOR OUR SUPPLY CHAIN
                    </h1>
                </div>
            
            <div className={styles.item}>
                <Image src="/img/QRcode.jpeg" alt="" width="200" height="200" />
            </div>
        </div>
    );
};

export default SupplyChain;
