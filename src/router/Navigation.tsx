import { Suspense } from "react";
import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom"
import logo from "../logo.svg"

import { routes } from "./routes";

// * suspense => sirve para decirle a react cuando estoy cargando un modulo y no me salte
// * un error con lazyLoad
// el componente resive un fallback que puede ser un componente de react

export const Navigation = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="logo" />
                        <ul>
                            {
                                routes.map(({ name, to }) => (
                                    <li key={to}>
                                        <NavLink
                                            className={
                                                ({ isActive }) => isActive ? "nav-active" : ""} to={to}
                                        >
                                            {name}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <Routes>
                        {
                            routes.map(({ name, path, to, Component }) => (
                                <Route path={path} element={<Component />} />
                            ))
                        }
                        <Route
                            path="/*"
                            element={<Navigate to={routes[0].to} replace />}
                        />
                    </Routes>

                </div>

            </BrowserRouter>
        </Suspense>
    )
}
