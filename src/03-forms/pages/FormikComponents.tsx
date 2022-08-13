import *  as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";

export const FormikComponents = () => {

    return (
        <>
            <Formik
                initialValues={{
                    email: "",
                    firstName: '',
                    lastName: '',
                    password: "",
                    terms: false,
                    jobType: "",
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    email: Yup.string().email(),
                    firstName: Yup.string().max(10, "Debe de tener 10 caracteres o menos").required("requerido"),
                    lastName: Yup.string().max(10, "Debe de tener 10 caracteres o menos").required("requerido"),
                    // con oneOf => le indico que dato deve de tener el field
                    terms: Yup.boolean().oneOf([true], "Deve de assepta las condiciones"),
                    // con notOneOf => lle figo que caracteres no estan permitidos
                    jobType: Yup.string().notOneOf(["designer"], "Esta opcion no permitida").required("requerido"),
                })}
            >
                {
                    (formik) => (
                        <Form>
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="email" />
                            <ErrorMessage component="span" name="email" />
                            <label htmlFor="firtnName">Firt Name</label>
                            <Field name="firstName" type="text" />
                            <ErrorMessage component="span" name="firstName" />
                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text" />
                            <ErrorMessage component="span" name="lastName" />
                            <label htmlFor="password">Password</label>
                            <Field name="password" type="text" />
                            <ErrorMessage component="span" name="password" />

                            <label>Job Type</label>
                            <Field name="jobType" as="select" >
                                <option value="designer">Design</option>
                                <option value="electronic">Electronic</option>
                                <option value="mecatronic">Mecatronic</option>
                            </Field>
                            <ErrorMessage component="span" name="jobType" />

                            <label>
                                <Field name="terms" type="checkbox" /> Term and coditions
                            </label>
                            <ErrorMessage component="span" name="terms" />

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </>
    );
}
