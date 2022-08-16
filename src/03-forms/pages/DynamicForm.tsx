import *  as Yup from "yup";
import { Formik, Form } from "formik"
import { MySelect, MyTextInput } from "../components";
import formJson from "../data/customForm.json";


// seteo el nombre por que el json es un array y no me dectetara las keys
// asique creo los objetos => [key:name]:input.value => creo un objeto name con el valor del => value
const initialValues: { [key: string]: any } = {}

// para validaciones
const requiredFields: { [key: string]: any } = {}

for (const input of formJson) {
    initialValues[input.name] = input.value;

    let schema = Yup.string();

    if (input.validations) {
        // aplicar validaciones a campos que tengan required
        for (const rule of input.validations) {
            if (rule.type === "required") {
                schema = schema.required("este campo es requerido")
            }
            if (rule.type === "minlength") {
                schema = schema.min((rule as any).value || 4, `Este campo deve tener almenos ${(rule as any).value} caracteres`);
            }
            if (rule.type === "email") {
                schema = schema.email("El email no es valido");
            }
        }
    };

    // agregar al objeto
    requiredFields[input.name] = schema;
}

const validationsSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
    console.log(formJson);

    return (
        <div>
            <h1>Dynaic Forms</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={validationsSchema}
            >
                {
                    () => (
                        <Form>
                            {
                                formJson.map(({ type, name, label, options, ...rest }) => {
                                    if (type === "input" || type === "password" || type === "email") {
                                        return <MyTextInput
                                            key={name}
                                            type={(type as any)}
                                            label={label}
                                            name={name}
                                            rest={rest}
                                        />
                                    } else if (type === "select") {
                                        return (
                                            <MySelect
                                                key={name}
                                                type={(type as any)}
                                                label={label}
                                                name={name}
                                                rest={rest}
                                            >
                                                {
                                                    options?.map(({ id, label }) => (
                                                        <option key={id}>{label}</option>
                                                    ))
                                                }
                                            </MySelect>
                                        )
                                    }
                                    // throw new Error("El tipo no es soportado")
                                })
                            }
                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
