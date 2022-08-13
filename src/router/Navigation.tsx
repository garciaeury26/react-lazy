import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink
} from 'react-router-dom';
import { Formik } from '../03-forms/pages/Formik';
import { FormikAbstract, FormikComponents, FormikYupPage } from '../03-forms/pages/index';
import "../03-forms/styles/styles.css"
import logo from '../logo.svg';

export const Navigation = () => {
    return (
        <Router>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/register" className="nav-active">Register</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik" className="nav-active">Formik</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formikYup" className="nav-active">formikYup</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formikComponents" className="nav-active">formikComponents</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formikAbstract" className="nav-active">formikComponents</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/formikComponents" element={<FormikComponents />} />
                    <Route path="/formikYup" element={<FormikYupPage />} />
                    <Route path="/formik" element={<Formik />} />
                    <Route path="/formikAbstract" element={<FormikAbstract />} />

                </Routes>
            </div>
        </Router>
    );
}