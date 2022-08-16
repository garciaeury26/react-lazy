
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";

export const RegisterFormikPractic = () => {
    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
            }}
            onSubmit={() => {
                console.log("submitted");
            }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .min(3, "Deve tener almenos 3 caracteres")
                    .max(10, "El maximo son 10 caracteres")
                    .required("requerido"),
                lastName: Yup.string()
                    .min(3, "Deve tener almenos 3 caracteres")
                    .max(10, "El maximo son 10 caracteres")
                    .required("requerido"),
                email: Yup.string().email("Revise el correo"),
                password: Yup.string()
                    .min(3, "Deve tener almenos 3 caracteres")
                    .max(20, "El maximo son 20 caracteres")
                    .required("requerido"),
                confirmPassword: Yup.string().oneOf([Yup.ref("password"), "Las contrañas no coiciden"]).required("requerido")
            })}
        >
            {
                ({ handleReset }) => (
                    <Form>
                        <MyTextInput name="firstName" label="First Name" placeholder="Enter your first name" />
                        <MyTextInput name="lastName" label="Last Name" placeholder="Enter your last name" />
                        <MyTextInput name="email" label="Email" placeholder="Enter your email" />
                        <MyTextInput name="password" label="l Name" placeholder="Enter your password" />
                        <MyTextInput name="confirmPassword" label="Confirm Password" placeholder="Confirm Password" />
                        <button type="submit">Submit</button>
                        <button onClick={handleReset}>Reset</button>
                    </Form>
                )
            }
        </Formik>

    )
}
