import { useField } from "formik"

interface Props {
    label: string;
    name: string;
    as?: "select" | "checkbox" | "radio";
    placeholder?: string;
    // agregar el tipado automaticamente a las propiedades que le mande
    [x: string]: any;
}

export const MySelect = ({ label, ...props }: Props) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>
                {label}
            </label>
            <select className="text-inpput" {...field} {...props} />
            {
                // errores
                meta.touched && meta.error && (
                    <span className="error"></span>
                )
            }

        </>
    )
}
