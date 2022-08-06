import { useState } from "react";

import { productInCart } from "../data/producst";
import { Product } from "../interfaces/interfaces";

export const useShopingCart = () => {
    // [key:string] => eso ase referencia a los indentificadores de cada objeto
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: productInCart }>({});

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
        setShoppingCart(oldShoppingCart => {

            if (count === 0) {
                const { [product.id]: toDelete, ...rest } = oldShoppingCart;
                return rest;
            }

            return {
                ...oldShoppingCart,
                // "id":{product, count}
                [product.id]: { ...product, count }
            }
        });

    }

    return { shoppingCart, onProductCountChange }
}
