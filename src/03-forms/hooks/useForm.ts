import { ChangeEvent } from "react";
import { useState } from "react";

interface FormValuesProps {
    name?: string,
    email?: string,
    password?: string,
    password2?: string,
}

export const useForm = <T>(defaultFormValues: T) => {
    const [formValues, setFormValues] = useState(defaultFormValues);

    const reset = (): void => {
        setFormValues({ ...defaultFormValues });

    };

    const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setFormValues(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const isValidEmail = (email: string): boolean => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };


    return { ...formValues, formValues, onChange, reset, isValidEmail }
}
