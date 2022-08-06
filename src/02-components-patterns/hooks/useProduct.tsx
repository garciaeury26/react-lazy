import { useEffect, useRef, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
    value?: number;
    product: Product,
    onChange?: (arg: onChangeArgs) => void
}

export const useProduct = ({ onChange, product, value = 0 }: useProductArgs) => {
    const [counter, setCounter] = useState(value);
    const isCountrolled = useRef(!!onChange);

    const increseBy = (value: number): any => {
        if (isCountrolled) {
            // el ! => se usa para indicarle que siempre llegara la propiedad evitar el error
            return onChange!({ count: value, product })
        }
        const newValue = Math.max(counter + value, 0);
        setCounter(newValue);
        onChange && onChange({ product, count: newValue });
    };

    useEffect(() => {
        setCounter(value);
    }, [value])


    return { counter, increseBy }
}
