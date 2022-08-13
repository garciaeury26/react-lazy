import *  as Yup from "yup";
import { useFormik } from "formik";

export const FormikYupPage = () => {

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
        validationSchema: Yup.object({
            email: Yup.string().email(),
            firstName: Yup.string().max(10, "Debe de tener 10 caracteres o menos").required("requerido"),
            lastName: Yup.string().max(10, "Debe de tener 10 caracteres o menos").required("requerido"),
            password: Yup.string().max(6, "Debe de tener 6 caracteres o menos").required("requerido"),
        })
    });

    // el getFieldProps => agrega el value,onChange,name => automaticamente solo hay que
    // segurse de que tengan el mismo nombre el objeto
    const { handleSubmit, errors, touched, getFieldProps } = formik;

    return (
        <>
            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    className=""
                    {...getFieldProps("email")}
                />
                <span>{touched.email && errors.email && errors.email}</span>
                <label htmlFor="firtnName">Firt Name</label>
                <input
                    type="text"
                    className=""
                    {...getFieldProps("firstName")}
                />
                <span>{touched.firstName && errors.firstName && errors.firstName}</span>
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    className=""
                    {...getFieldProps("lastName")}

                />
                <span>{touched.lastName && errors.lastName && errors.lastName}</span>
                <label htmlFor="passwordName">Password</label>
                <input
                    type="password"
                    className=""
                    {...getFieldProps("password")}
                />
                <span>{touched.password && errors.password && errors.password}</span>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}
