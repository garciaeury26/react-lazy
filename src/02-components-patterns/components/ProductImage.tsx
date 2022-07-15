import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export interface Props {
    img?: string;
    className?: string;
}

export const ProductImage = ({ img = "", className }: Props) => {
    const { product } = useContext(ProductContext);

    const src = img ? img : product.img ?? noImage;

    return (
        <img
            className={`${styles.productImg} ${className}`}
            src={src} alt="product img"
        />
    )
}
