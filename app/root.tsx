import type {MetaFunction, LinksFunction} from "@remix-run/node";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";

import styles from "./styles/app.css";
import Logo from "~/assets/logo.svg";

export const links: LinksFunction = () => [
    {rel: "stylesheet", href: styles},
];
export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "Turo CMS Management",
    viewport: "width=device-width,initial-scale=1",
});

export default function App() {
    return (
        <html lang="en">
        <head>
            <Meta/>
            <Links/>
        </head>
        <body>
        <header className="header">
            <img className="turo-logo" src={Logo} alt="Turo Logo"/>
        </header>
        <Outlet/>
        <ScrollRestoration/>
        <Scripts/>
        <LiveReload/>
        <footer className="footer">
            Copyright
        </footer>
        </body>
        </html>
    );
}
