import { Props as ProductCardProps } from "../components/ProductCard"
import { Props as TitleProps } from "../components/ProductTitle";
import { Props as ImageProps } from "../components/ProductImage";
import { Props as ButtonProps } from "../components/ProductButtons";

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    increseBy: (value: number) => any;
    product: Product;
}


export interface ProductCardHOCProps {
    ({ children, product, value }: ProductCardProps): JSX.Element;
    Title: (Props: TitleProps) => JSX.Element;
    Image: (Props: ImageProps) => JSX.Element;
    Buttons: (Props: ButtonProps) => JSX.Element;
}

export interface onChangeArgs {
    product: Product;
    count: number,
}