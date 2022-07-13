import { lazy, LazyExoticComponent } from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyLoad/pages/index"


type JSXComponent = () => JSX.Element;

interface Route {
    name: string;
    path: string;
    to: string;
    // type => puede contener componentes del tipo lazyLoad y del tipo normal
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

// el comentario es opcional => sirve para decirle al navegador como seva a llamar el chunk
const Lazy1 = lazy(() => import(/*webpackChunkName: "LazyPage1"*/"../01-lazyLoad/pages/LazyPage1"));
const Lazy2 = lazy(() => import(/*webpackChunkName: "LazyPage2"*/"../01-lazyLoad/pages/LazyPage2"));
const Lazy3 = lazy(() => import(/*webpackChunkName: "LazyPage3"*/"../01-lazyLoad/pages/LazyPage3"));

export const routes: Route[] = [
    {
        to: "/lazy1",
        path: "lazy1",
        Component: Lazy1,
        name: "lazy1",

    },
    {
        to: "/lazy2",
        path: "lazy2",
        Component: Lazy2,
        name: "lazy2",

    },
    {
        to: "/lazy3",
        path: "lazy3",
        Component: Lazy3,
        name: "lazy3",
    },
]