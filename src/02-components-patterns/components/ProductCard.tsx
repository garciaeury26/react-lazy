import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext } from "react";
import { Product, ProductContextProps, onChangeArgs, InitalValues, ProductHandlers } from "../interfaces/interfaces";
import { CSSProperties } from "react"



export interface Props {
    className?: string;
    product: Product;
    // children?: ReactElement | ReactElement[]// o tambien => JSX.Element
    children: (args: ProductHandlers) => JSX.Element,
    style?: CSSProperties,
    value?: number;
    onChange?: (args: onChangeArgs) => void,
    initialValues?: InitalValues
}
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, value = 0, className, style, onChange, initialValues }:
    Props) => {
    const { counter, increseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });

    // y puedo manderle parametros
    // el children es una funcion que retorna jsx por eso la ejecuto como una funcion 

    return (
        <Provider value={{ counter, increseBy, product, isMaxCountReached }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {
                    children({
                        count: counter,
                        maxCount: maxCount,
                        isMaxCountReached,
                        product,
                        increseBy,
                        reset
                    })
                }
            </div>
        </Provider>
    );
};


