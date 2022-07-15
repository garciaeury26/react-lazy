import { useState } from "react";


export const useProduct = () => {
    const [counter, setCounter] = useState(0)

    const increseBy = (value: number = 1): any => {
        setCounter(prev => Math.max(prev + value, 0));
    };

    return { counter, increseBy }
}
