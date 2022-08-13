import { FormEvent } from "react";

import { useForm } from "../hooks/useForm";

export const RegisterPage = () => {
    const { name, email, password, password2, onChange, reset, isValidEmail } = useForm({ name: "", email: "", password: "", password2: "" });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        reset();
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={onSubmit} noValidate>
                <input
                    type="text"
                    placeholder="name"
                    name="name"
                    value={name} onChange={onChange}
                    className={`${name.trim().length <= 0 && "has-error"}`}
                />
                {
                    name.trim().length <= 0 && <span>Este campo es necesario</span>
                }
                <input
                    type="email"
                    placeholder="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    className={`${!isValidEmail(email) && "has-error"}`}
                />
                {
                    !isValidEmail(email) && <span>Correo invalido</span>
                }
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    className={`${password.trim().length <= 0 && "has-error"}`}
                />
                {
                    password.trim().length <= 0 && <span>Este campo es necesario</span>
                }
                {
                    password.trim().length <= 6 && password.trim().length > 0 && <span>Este campo es necesario</span>
                }
                <input
                    type="passsword"
                    name="password2"
                    placeholder="passsword confirm"
                    value={password2}
                    onChange={onChange}
                    className={`${password.trim().length > 6 && "has-error"}`}
                />

                {
                    password2.trim().length > 6 && password2.trim().length <= 0 && <span>Este campo es necesario</span>
                }
                {
                    password2.trim().length > 6 && password.trim() === password2.trim() && <span>Las contrañas no coiciden</span>
                }
                <button type="submit">Submit</button>
                <button type="button" onClick={reset}>Reset</button>
            </form>
        </div>
    )
}
