import { ErrorMessage, useField } from "formik"

interface Props {
    label: string;
    name: string;
    type?: "text" | "email" | "password" | "select" | "checkbox" | "radio";
    as?: "select" | "checkbox" | "radio";
    placeholder?: string;
    // agregar el tipado automaticamente a las propiedades que le mande
    [x: string]: any;
}

export const MyTextInput = ({ label, ...props }: Props) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>
                {label}
            </label>
            <input type={props.type} className="text-inpput" {...field} {...props} />
            <ErrorMessage name={props.name} component="span" className="custon-span-error-class" />

        </>
    )
}
