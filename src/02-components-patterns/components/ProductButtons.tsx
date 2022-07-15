import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export const ProductButtons = () => {
    const { counter, increseBy } = useContext(ProductContext);
    return (
        <div className={styles.buttonsContainer}>
            <button onClick={() => increseBy(-1)} className={styles.buttonMinus}>
                -
            </button>
            <div className={styles.countLabel}>
                {counter}
            </div>
            <button onClick={() => increseBy(1)} className={styles.buttonAdd}>
                +
            </button>
        </div>
    );
};