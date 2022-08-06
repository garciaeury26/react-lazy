import { useState } from "react";

import { productInCart } from "../data/producst";
import { Product } from "../interfaces/interfaces";

export const useShopingCart = () => {
    // [key:string] => eso ase referencia a los indentificadores de cada objeto
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: productInCart }>({});

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
        setShoppingCart(oldShoppingCart => {

            const productInCart: productInCart = oldShoppingCart[product.id] || { ...product, count: 0 }
            if (Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }

            // borrar el producto
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return rest;

            // solucion anterior 

            // if (count === 0) {
            //     const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            //     return rest;
            // }

            // return {
            //     ...oldShoppingCart,
            //     // "id":{product, count}
            //     [product.id]: { ...product, count }
            // }
        });

    }

    return { shoppingCart, onProductCountChange }
}
