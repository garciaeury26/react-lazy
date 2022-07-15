import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext } from "react";
import { Product, ProductContextProps } from "../interfaces/interfaces";
import { ReactElement, CSSProperties } from "react"


export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[]// o tambien => JSX.Element
    className?: string;
    style?: CSSProperties
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style }:
    Props) => {
    const { counter, increseBy } = useProduct()
    return (
        <Provider value={{ counter, increseBy, product }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children}
            </div>
        </Provider>
    );
};


