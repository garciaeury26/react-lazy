import { Product } from "../interfaces/interfaces";

const product1 = {
    id: "1",
    title: "coffe Mug",
    img: "/coffee-mug.png"
}

const product2 = {
    id: "2",
    title: "coffe Mug",
    img: "/coffee-mug2.png"
}

export const producs: Product[] = [
    product1,
    product2
];

// extendi Product que es lo mismo que hacer => asi extentiendo sus propiedades y tipado
export interface productInCart extends Product {
    count: number
}
