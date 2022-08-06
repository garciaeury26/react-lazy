import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext } from "react";
import { Product, ProductContextProps, onChangeArgs } from "../interfaces/interfaces";
import { ReactElement, CSSProperties } from "react"


export interface Props {
    value?: number;
    product: Product;
    children?: ReactElement | ReactElement[]// o tambien => JSX.Element
    className?: string;
    style?: CSSProperties,
    onChange?: (args: onChangeArgs) => void
}
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, value = 0, className, style, onChange }:
    Props) => {
    const { counter, increseBy } = useProduct({ onChange, product, value });

    return (
        <Provider value={{ counter, increseBy, product }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children}
            </div>
        </Provider>
    );
};


