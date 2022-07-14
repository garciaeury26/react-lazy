import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyLoad/pages/NoLazy";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyLoad/pages/index"


type JSXComponent = () => JSX.Element;

interface Route {
    name: string;
    path: string;
    to: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const LazyLoyout = lazy(() => import(/*webpackChunkName: "LazyLaout"*/"../01-lazyLoad/layout/LazyLayout"));

export const routes: Route[] = [
    {
        // en el path expesifique que las rutas que tengan lazyLoad tabiente tendran lazy 
        path: "/lazyload/*",
        to: "/lazyload",
        Component: LazyLoyout,
        name: "lazyLayout - Dash",
    },
    {
        to: "/no-lazy",
        path: "no-lazy",
        Component: NoLazy,
        name: "no lazy",

    },

]