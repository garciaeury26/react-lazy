
import { FormikErrors, useFormik } from "formik";
import "../styles/styles.css";

interface FormValuesProps {
    email: "",
    firstName: string,
    lastName: string,
    password: string,
}

// bases de formik
export const Formik = () => {

    const validate = ({ email, firstName, lastName, password }: FormValuesProps) => {
        const errors: FormikErrors<FormValuesProps> = {};

        // regresar los errores
        if (!firstName) {
            errors.firstName = "Required";
        } else if (firstName.length >= 10) {
            errors.firstName = "Must be at least 15 characters";
        }

        if (!lastName) {
            errors.lastName = "Required";
        } else if (lastName.length >= 10) {
            errors.lastName = "Must be at least 15 characters";
        }

        if (!password) {
            errors.password = "Required";
        } else if (password.length >= 15) {
            errors.password = "Must be at least 15 characters";
        }

        if (!email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Invalid email address';
        }

        return errors;

    }

    const formik = useFormik({
        initialValues: {
            email: "",
            firstName: "",
            lastName: "",
            password: "",
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validate
    });

    // el handleSubmit => dispara funcion submit que le mandamos a useFormik
    // touched => es para saver si el campo fue tocado => se tiene que usar con el handleBlur
    const { handleChange, handleSubmit, handleBlur, errors, touched } = formik;
    const { email, firstName, lastName, password } = formik.values;

    return (
        <>
            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    type="email"
                    className=""
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={email}
                />
                <span>{touched.email && errors.email && errors.email}</span>
                <label htmlFor="firtnName">Firt Name</label>
                <input
                    name="firstName"
                    type="text"
                    className=""
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={firstName}
                />
                <span>{touched.firstName && errors.firstName && errors.firstName}</span>
                <label htmlFor="lastName">Last Name</label>
                <input
                    name="lastName"
                    type="text"
                    className=""
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={lastName}
                />
                <span>{touched.lastName && errors.lastName && errors.lastName}</span>
                <label htmlFor="passwordName">Password</label>
                <input
                    name="password"
                    type="password"
                    className=""
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={password}
                />
                <span>{touched.password && errors.password && errors.password}</span>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
