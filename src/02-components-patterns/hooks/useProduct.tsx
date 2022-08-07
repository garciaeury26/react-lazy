import { useEffect, useRef, useState } from "react";
import { InitalValues, onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
    value?: number;
    product: Product,
    onChange?: (arg: onChangeArgs) => void,
    initialValues?: InitalValues
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {
    const [counter, setCounter] = useState<number>(initialValues?.count || value);
    const isMounted = useRef(false);

    console.log(initialValues?.count)

    const increseBy = (value: number) => {
        let newValue = Math.max(counter + value, 0);
        if (initialValues?.maxCount) {
            newValue = Math.min(newValue, initialValues.maxCount);
            setCounter(newValue)
        } else {
            setCounter(newValue)
        }
        onChange && onChange({ product, count: newValue })
    };

    const reset = (): void => {
        setCounter(initialValues?.count || value)
    }

    useEffect(() => {
        isMounted.current = true;
    }, [])

    useEffect(() => {
        if (isMounted.current) return;
    }, [value])


    return {
        counter,
        increseBy,
        maxCount: initialValues?.maxCount,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        reset
    }
}
