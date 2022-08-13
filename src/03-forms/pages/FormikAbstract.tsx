import *  as Yup from "yup";
import { Formik, Form } from "formik";
import { MyCheckBox, MySelect, MyTextInput } from "../components";

export const FormikAbstract = () => {

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
                            <MyTextInput label={"Email"} name={"email"} />
                            <MyTextInput label={"first Name"} name={"firstName"} />
                            <MyTextInput label={"Last Name"} name={"lastName"} />
                            <MyTextInput label={"Password"} name={"password"} type="password" />
                            <MyCheckBox label={"terms"} name={"terms"} />
                            <MySelect label={"conditions"} name={"terms"} >
                                <option value="designer">Design</option>
                                <option value="electonic">Electronic</option>
                                <option value="Mecatronic">Mectronic</option>
                            </MySelect>

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </>
    );
}
