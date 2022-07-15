import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";
import { CSSProperties } from "react"

export interface Props {
    className?: string;
    style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
    const { counter, increseBy } = useContext(ProductContext);
    return (
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
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